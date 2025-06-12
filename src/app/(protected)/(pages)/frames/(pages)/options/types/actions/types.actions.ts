"use server";
// Vendors
import slugify from "slugify";
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

  const slug = slugify(validatedFields.data.name, {
    lower: true,
    strict: true,
    trim: true,
  });

  const existing = await prisma.frameType.findUnique({
    where: { slug },
  });

  if (existing) {
    return {
      error: "Ya existe un tipo con ese nombre. Por favor, elige otro",
    };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "frame/types",
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
      const newType = await prisma.frameType.create({
        data: {
          ...validatedFields.data,
          slug,
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
    const images = await prisma.frameTypeImage.findMany({
      where: { typeId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.frameType.delete({ where: { id } });
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
    const images = await prisma.frameTypeImage.findMany({
      where: { typeId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.frameType.deleteMany({ where: { id: { in: ids } } });
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
    const types = await prisma.frameType.findMany({
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

  const slug = slugify(validatedFields.data.name, {
    lower: true,
    strict: true,
    trim: true,
  });

  const existing = await prisma.frameType.findUnique({
    where: { slug },
  });

  if (existing && existing.id !== id) {
    return {
      error: "Ya existe un tipo con ese nombre. Por favor, elige otro",
    };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.frameTypeImage.findMany({
        where: { typeId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.frameTypeImage.deleteMany({
        where: { typeId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "frame/types",
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
      const updatedType = await prisma.frameType.update({
        where: { id },
        data: {
          ...validatedFields.data,
          slug,
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
