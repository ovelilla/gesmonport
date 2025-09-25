"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { familySchema } from "../schemas/family.schema";
// Types
import type {
  CreateFamilyProps,
  CreateFamilyReturn,
  DeleteFamilyProps,
  DeleteFamilyReturn,
  DeleteMultipleFamiliesProps,
  DeleteMultipleFamiliesReturn,
  ReadFamiliesReturn,
  ReadModelsReturn,
  UpdateFamilyProps,
  UpdateFamilyReturn,
} from "./types/families.actions.types";

const createFamily = async ({
  newImages,
  values,
}: CreateFamilyProps): Promise<CreateFamilyReturn> => {
  const validatedFields = familySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/families",
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
      const newFamily = await prisma.doorFamily.create({
        data: {
          ...validatedFields.data,
          images: {
            create: validImages,
          },
          models: {
            create: validatedFields.data.models.map((modelId) => ({
              doorModelId: modelId,
            })),
          },
        },
        include: {
          images: true,
          models: {
            include: {
              doorModel: true,
            },
          },
        },
      });

      const transformed = {
        ...newFamily,
        models: newFamily.models.map((model) => model.doorModel),
      };

      return { success: "Familia creada con éxito", family: transformed };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear la familia. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la familia. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFamily = async ({
  id,
}: DeleteFamilyProps): Promise<DeleteFamilyReturn> => {
  try {
    const images = await prisma.doorFamilyImage.findMany({
      where: { doorFamilyId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.doorFamily.delete({ where: { id } });
    return { success: "Familia eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la familia. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFamilies = async ({
  ids,
}: DeleteMultipleFamiliesProps): Promise<DeleteMultipleFamiliesReturn> => {
  try {
    const images = await prisma.doorFamilyImage.findMany({
      where: { doorFamilyId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.doorFamily.deleteMany({ where: { id: { in: ids } } });
    return { success: "Familias eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las familias. Por favor, inténtalo de nuevo",
    };
  }
};

const readFamilies = async (): Promise<ReadFamiliesReturn> => {
  try {
    const families = await prisma.doorFamily.findMany({
      orderBy: { name: "asc" },
      include: {
        models: {
          include: { doorModel: true },
        },
        images: true,
      },
    });

    const transformed = families.map((family) => ({
      ...family,
      models: family.models.map((model) => model.doorModel),
    }));

    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readModels = async (): Promise<ReadModelsReturn> => {
  try {
    const models = await prisma.doorModel.findMany({
      orderBy: { name: "asc" },
    });
    return models;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateFamily = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateFamilyProps): Promise<UpdateFamilyReturn> => {
  const validatedFields = familySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.doorFamilyImage.findMany({
        where: { doorFamilyId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.doorFamilyImage.deleteMany({
        where: { doorFamilyId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/families",
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
      const updatedFamily = await prisma.doorFamily.update({
        where: { id },
        data: {
          ...validatedFields.data,
          images: {
            create: validImages,
          },
          models: {
            deleteMany: {},
            create: validatedFields.data.models.map((modelId) => ({
              doorModelId: modelId,
            })),
          },
        },
        include: {
          images: true,
          models: {
            include: {
              doorModel: true,
            },
          },
        },
      });

      const transformed = {
        ...updatedFamily,
        models: updatedFamily.models.map((model) => model.doorModel),
      };

      return {
        success: "Familia actualizada con éxito",
        family: transformed,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar la familia. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la familia. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFamily,
  deleteFamily,
  deleteMultipleFamilies,
  readFamilies,
  readModels,
  updateFamily,
};
