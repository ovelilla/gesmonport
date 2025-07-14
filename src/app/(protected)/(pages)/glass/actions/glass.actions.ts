"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { glassSchema } from "../schemas/glass.schema";
// Types
import type {
  CreateGlassProps,
  CreateGlassReturn,
  DeleteGlassProps,
  DeleteGlassReturn,
  DeleteMultipleGlassProps,
  DeleteMultipleGlassReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadGlassReturn,
  ReadModelsReturn,
  ReadTypesReturn,
  UpdateGlassProps,
  UpdateGlassReturn,
} from "./types/glass.actions.types";

const createGlass = async ({
  newImages,
  values,
}: CreateGlassProps): Promise<CreateGlassReturn> => {
  const validatedFields = glassSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "glass/glass",
          reference: validatedFields.data.name,
        }),
      ),
    );

    const validImages = filterValidImages(uploadedImages);

    if (newImages && newImages.length > 0 && validImages.length === 0) {
      return {
        error: "Error al subir las imágenes. Por favor, inténtalo de nuevo",
      };
    }

    try {
      const newGlass = await prisma.glass.create({
        data: {
          ...validatedFields.data,
          images: {
            create: validImages,
          },
        },
        include: {
          family: true,
          finish: true,
          images: true,
          model: true,
          type: true,
        },
      });

      return { success: "Vidrio creado con éxito", glass: newGlass };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el vidrio. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el vidrio. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteGlass = async ({
  id,
}: DeleteGlassProps): Promise<DeleteGlassReturn> => {
  try {
    const images = await prisma.glassImage.findMany({
      where: { glassId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.glass.delete({ where: { id } });
    return { success: "Vidrio eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el vidrio. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleGlass = async ({
  ids,
}: DeleteMultipleGlassProps): Promise<DeleteMultipleGlassReturn> => {
  try {
    const images = await prisma.glassImage.findMany({
      where: { glassId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.glass.deleteMany({ where: { id: { in: ids } } });
    return { success: "Vidrios eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los vidrios. Por favor, inténtalo de nuevo",
    };
  }
};

const readFamilies = async (): Promise<ReadFamiliesReturn> => {
  try {
    const families = await prisma.glassFamily.findMany({
      orderBy: { name: "asc" },
    });
    return families;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readFinishes = async (): Promise<ReadFinishesReturn> => {
  try {
    const finishes = await prisma.glassFinish.findMany({
      orderBy: { name: "asc" },
    });
    return finishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readGlass = async (): Promise<ReadGlassReturn> => {
  try {
    const glass = await prisma.glass.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        images: true,
        model: true,
        type: true,
      },
    });
    return glass;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readModels = async (): Promise<ReadModelsReturn> => {
  try {
    const models = await prisma.glassModel.findMany({
      orderBy: { name: "asc" },
    });
    return models;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readTypes = async (): Promise<ReadTypesReturn> => {
  try {
    const types = await prisma.glassType.findMany({
      orderBy: { name: "asc" },
    });
    return types;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateGlass = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateGlassProps): Promise<UpdateGlassReturn> => {
  const validatedFields = glassSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.glassImage.findMany({
        where: { glassId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.glassImage.deleteMany({
        where: { glassId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "glass/glass",
          reference: validatedFields.data.name,
        }),
      ),
    );

    const validImages = filterValidImages(uploadedImages);

    if (newImages && newImages.length > 0 && validImages.length === 0) {
      return {
        error: "Error al subir las imágenes. Por favor, inténtalo de nuevo",
      };
    }

    try {
      const updatedGlass = await prisma.glass.update({
        where: { id },
        data: {
          ...validatedFields.data,
          images: {
            create: validImages,
          },
        },
        include: {
          family: true,
          finish: true,
          images: true,
          model: true,
          type: true,
        },
      });

      return {
        success: "Vidrio actualizado con éxito",
        glass: updatedGlass,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar el vidrio. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el vidrio. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createGlass,
  deleteGlass,
  deleteMultipleGlass,
  readFamilies,
  readFinishes,
  readGlass,
  readModels,
  readTypes,
  updateGlass,
};
