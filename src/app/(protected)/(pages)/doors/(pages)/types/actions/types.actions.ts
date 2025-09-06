"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { typeSchema } from "../schemas/type.schema";
// Types
import type {
  CreateTypeProps,
  CreateTypeReturn,
  DeleteTypeProps,
  DeleteTypeReturn,
  DeleteMultipleTypesProps,
  DeleteMultipleTypesReturn,
  ReadTypesReturn,
  UpdateTypeProps,
  UpdateTypeReturn,
} from "./types/types.actions.types";

const createType = async ({
  newImages,
  values,
}: CreateTypeProps): Promise<CreateTypeReturn> => {
  const validatedFields = typeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/types",
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
      const newType = await prisma.doorType.create({
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

      return { success: "Tipo creado con éxito", type: newType };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el tipo. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el tipo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteType = async ({
  id,
}: DeleteTypeProps): Promise<DeleteTypeReturn> => {
  try {
    const images = await prisma.doorTypeImage.findMany({
      where: { doorTypeId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.doorType.delete({ where: { id } });
    return { success: "Tipo eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el tipo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleTypes = async ({
  ids,
}: DeleteMultipleTypesProps): Promise<DeleteMultipleTypesReturn> => {
  try {
    const images = await prisma.doorTypeImage.findMany({
      where: { doorTypeId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.doorType.deleteMany({ where: { id: { in: ids } } });
    return { success: "Tipos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los tipos. Por favor, inténtalo de nuevo",
    };
  }
};

const readTypes = async (): Promise<ReadTypesReturn> => {
  try {
    const types = await prisma.doorType.findMany({
      orderBy: { name: "asc" },
      include: {
        images: true,
      },
    });
    return types;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateType = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateTypeProps): Promise<UpdateTypeReturn> => {
  const validatedFields = typeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.doorTypeImage.findMany({
        where: { doorTypeId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.doorTypeImage.deleteMany({
        where: { doorTypeId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/types",
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
      const updatedType = await prisma.doorType.update({
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
        success: "Tipo actualizado con éxito",
        type: updatedType,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar el tipo. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el tipo. Por favor, inténtalo de nuevo",
    };
  }
};

export { createType, deleteType, deleteMultipleTypes, readTypes, updateType };
