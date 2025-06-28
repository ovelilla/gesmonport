"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { finishSchema } from "../schemas/finish.schema";
// Types
import type {
  CreateFinishProps,
  CreateFinishReturn,
  DeleteFinishProps,
  DeleteFinishReturn,
  DeleteMultipleFinishesProps,
  DeleteMultipleFinishesReturn,
  ReadFinishesReturn,
  UpdateFinishProps,
  UpdateFinishReturn,
} from "./types/finishes.actions.types";

const createFinish = async ({
  newImages,
  values,
}: CreateFinishProps): Promise<CreateFinishReturn> => {
  const validatedFields = finishSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "architrave/finishes",
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
      const newFinish = await prisma.architraveFinish.create({
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

      return { success: "Acabado creado con éxito", finish: newFinish };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el acabado. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el acabado. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFinish = async ({
  id,
}: DeleteFinishProps): Promise<DeleteFinishReturn> => {
  try {
    const images = await prisma.architraveFinishImage.findMany({
      where: { finishId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.architraveFinish.delete({ where: { id } });
    return { success: "Acabado eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el acabado. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFinishes = async ({
  ids,
}: DeleteMultipleFinishesProps): Promise<DeleteMultipleFinishesReturn> => {
  try {
    const images = await prisma.architraveFinishImage.findMany({
      where: { finishId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.architraveFinish.deleteMany({ where: { id: { in: ids } } });
    return { success: "Acabados eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los acabados. Por favor, inténtalo de nuevo",
    };
  }
};

const readFinishes = async (): Promise<ReadFinishesReturn> => {
  try {
    const finishes = await prisma.architraveFinish.findMany({
      orderBy: { name: "asc" },
      include: {
        images: true,
      },
    });
    return finishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateFinish = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateFinishProps): Promise<UpdateFinishReturn> => {
  const validatedFields = finishSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.architraveFinishImage.findMany({
        where: { finishId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.architraveFinishImage.deleteMany({
        where: { finishId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "architrave/finishes",
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
      const updatedFinish = await prisma.architraveFinish.update({
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
        success: "Acabado actualizado con éxito",
        finish: updatedFinish,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar el acabado. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el acabado. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFinish,
  deleteFinish,
  deleteMultipleFinishes,
  readFinishes,
  updateFinish,
};
