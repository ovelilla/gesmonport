"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { modelSchema } from "../schemas/model.schema";
// Types
import type {
  CreateModelProps,
  CreateModelReturn,
  DeleteModelProps,
  DeleteModelReturn,
  DeleteMultipleModelsProps,
  DeleteMultipleModelsReturn,
  ReadModelsReturn,
  UpdateModelProps,
  UpdateModelReturn,
} from "./types/models.actions.types";

const createModel = async ({
  newImages,
  values,
}: CreateModelProps): Promise<CreateModelReturn> => {
  const validatedFields = modelSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "glass/models",
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
      const newModel = await prisma.glassModel.create({
        data: {
          ...validatedFields.data,
          images: {
            create: validImages,
          },
        },
        include: {
          images: true,
        },
      });

      return { success: "Modelo creado con éxito", model: newModel };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el modelo. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el modelo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteModel = async ({
  id,
}: DeleteModelProps): Promise<DeleteModelReturn> => {
  try {
    const images = await prisma.glassModelImage.findMany({
      where: { modelId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.glassModel.delete({ where: { id } });
    return { success: "Modelo eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el modelo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleModels = async ({
  ids,
}: DeleteMultipleModelsProps): Promise<DeleteMultipleModelsReturn> => {
  try {
    const images = await prisma.glassModelImage.findMany({
      where: { modelId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.glassModel.deleteMany({ where: { id: { in: ids } } });
    return { success: "Modelos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los modelos. Por favor, inténtalo de nuevo",
    };
  }
};

const readModels = async (): Promise<ReadModelsReturn> => {
  try {
    const models = await prisma.glassModel.findMany({
      orderBy: { name: "asc" },
      include: {
        images: true,
      },
    });
    return models;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateModel = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateModelProps): Promise<UpdateModelReturn> => {
  const validatedFields = modelSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.glassModelImage.findMany({
        where: { modelId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.glassModelImage.deleteMany({
        where: { modelId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "glass/models",
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
      const updatedModel = await prisma.glassModel.update({
        where: { id },
        data: {
          ...validatedFields.data,
          images: {
            create: validImages,
          },
        },
        include: {
          images: true,
        },
      });

      return {
        success: "Modelo actualizado con éxito",
        model: updatedModel,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar el modelo. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el modelo. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createModel,
  deleteModel,
  deleteMultipleModels,
  readModels,
  updateModel,
};
