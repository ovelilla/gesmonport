"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { architraveSchema } from "../schemas/architrave.schema";
// Types
import type {
  CreateArchitraveProps,
  CreateArchitraveReturn,
  DeleteArchitraveProps,
  DeleteArchitraveReturn,
  DeleteMultipleArchitravesProps,
  DeleteMultipleArchitravesReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadArchitravesReturn,
  ReadTypesReturn,
  UpdateArchitraveProps,
  UpdateArchitraveReturn,
} from "./types/architraves.actions.types";

const createArchitrave = async ({
  newImages,
  values,
}: CreateArchitraveProps): Promise<CreateArchitraveReturn> => {
  const validatedFields = architraveSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "architrave/architraves",
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
      const newArchitrave = await prisma.architrave.create({
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
          type: true,
        },
      });

      return {
        success: "Tapajunta creado con éxito",
        architrave: newArchitrave,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el tapajunta. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el tapajunta. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteArchitrave = async ({
  id,
}: DeleteArchitraveProps): Promise<DeleteArchitraveReturn> => {
  try {
    const images = await prisma.architraveImage.findMany({
      where: { architraveId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.architrave.delete({ where: { id } });
    return { success: "Tapajunta eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el tapajunta. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleArchitraves = async ({
  ids,
}: DeleteMultipleArchitravesProps): Promise<DeleteMultipleArchitravesReturn> => {
  try {
    const images = await prisma.architraveImage.findMany({
      where: { architraveId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.architrave.deleteMany({ where: { id: { in: ids } } });
    return { success: "Tapajuntas eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los tapajuntas. Por favor, inténtalo de nuevo",
    };
  }
};

const readFamilies = async (): Promise<ReadFamiliesReturn> => {
  try {
    const families = await prisma.architraveFamily.findMany({
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
    const finishes = await prisma.architraveFinish.findMany({
      orderBy: { name: "asc" },
    });
    return finishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readArchitraves = async (): Promise<ReadArchitravesReturn> => {
  try {
    const architraves = await prisma.architrave.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        images: true,
        type: true,
      },
    });
    return architraves;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readTypes = async (): Promise<ReadTypesReturn> => {
  try {
    const types = await prisma.architraveType.findMany({
      orderBy: { name: "asc" },
    });
    return types;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateArchitrave = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateArchitraveProps): Promise<UpdateArchitraveReturn> => {
  const validatedFields = architraveSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.architraveImage.findMany({
        where: { architraveId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.architraveImage.deleteMany({
        where: { architraveId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "architrave/architraves",
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
      const updatedArchitrave = await prisma.architrave.update({
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
          type: true,
        },
      });

      return {
        success: "Tapajunta actualizado con éxito",
        architrave: updatedArchitrave,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error:
          "Error al actualizar el tapajunta. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el tapajunta. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createArchitrave,
  deleteArchitrave,
  deleteMultipleArchitraves,
  readFamilies,
  readFinishes,
  readArchitraves,
  readTypes,
  updateArchitrave,
};
