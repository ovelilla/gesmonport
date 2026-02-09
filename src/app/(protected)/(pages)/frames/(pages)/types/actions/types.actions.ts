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
  ReadFamiliesReturn,
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
          families: {
            create: validatedFields.data.families.map((familyId) => ({
              frameFamilyId: familyId,
            })),
          },
          images: {
            create: validImages,
          },
        },
        include: {
          families: {
            include: {
              frameFamily: true,
            },
          },
          images: true,
        },
      });

      const transformed = {
        ...newType,
        families: newType.families.map((family) => family.frameFamily),
      };

      return { success: "Tipo creado con éxito", type: transformed };
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
      where: { frameTypeId: id },
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
      where: { frameTypeId: { in: ids } },
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

const readFamilies = async (): Promise<ReadFamiliesReturn> => {
  try {
    const families = await prisma.frameFamily.findMany({
      orderBy: { name: "asc" },
    });
    return families;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readTypes = async (): Promise<ReadTypesReturn> => {
  try {
    const types = await prisma.frameType.findMany({
      orderBy: { name: "asc" },
      include: {
        families: {
          include: {
            frameFamily: true,
          },
        },
        images: true,
      },
    });

    const transformed = types.map((type) => ({
      ...type,
      families: type.families.map((family) => family.frameFamily),
    }));

    return transformed;
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
      const imagesToDelete = await prisma.frameTypeImage.findMany({
        where: { frameTypeId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.frameTypeImage.deleteMany({
        where: { frameTypeId: id, url: { in: toDelete } },
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
          families: {
            deleteMany: {},
            create: validatedFields.data.families.map((familyId) => ({
              frameFamilyId: familyId,
            })),
          },
          images: { create: validImages },
        },
        include: {
          families: { include: { frameFamily: true } },
          images: true,
        },
      });

      const transformed = {
        ...updatedType,
        families: updatedType.families.map((family) => family.frameFamily),
      };

      return {
        success: "Tipo actualizado con éxito",
        type: transformed,
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

export {
  createType,
  deleteType,
  deleteMultipleTypes,
  readFamilies,
  readTypes,
  updateType,
};
