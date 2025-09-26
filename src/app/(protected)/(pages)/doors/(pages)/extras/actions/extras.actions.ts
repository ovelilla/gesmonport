"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { extraSchema } from "../schemas/extras.schema";
// Types
import type {
  CreateExtraProps,
  CreateExtraReturn,
  DeleteExtraProps,
  DeleteExtraReturn,
  DeleteMultipleExtrasProps,
  DeleteMultipleExtrasReturn,
  ReadExtrasReturn,
  UpdateExtraProps,
  UpdateExtraReturn,
} from "./types/extras.actions.types";

const createExtra = async ({
  newImages,
  values,
}: CreateExtraProps): Promise<CreateExtraReturn> => {
  const validatedFields = extraSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/extras",
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
      const newExtra = await prisma.doorExtra.create({
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

      return { success: "Extra creado con éxito", extra: newExtra };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el extra. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el extra. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteExtra = async ({
  id,
}: DeleteExtraProps): Promise<DeleteExtraReturn> => {
  try {
    const images = await prisma.doorExtraImage.findMany({
      where: { doorExtraId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.doorExtra.delete({ where: { id } });
    return { success: "Extra eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el extra. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleExtras = async ({
  ids,
}: DeleteMultipleExtrasProps): Promise<DeleteMultipleExtrasReturn> => {
  try {
    const images = await prisma.doorExtraImage.findMany({
      where: { doorExtraId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.doorExtra.deleteMany({ where: { id: { in: ids } } });
    return { success: "Extras eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los extras. Por favor, inténtalo de nuevo",
    };
  }
};

const readExtras = async (): Promise<ReadExtrasReturn> => {
  try {
    const extras = await prisma.doorExtra.findMany({
      orderBy: { name: "asc" },
      include: {
        images: true,
      },
    });

    return extras;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateExtra = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateExtraProps): Promise<UpdateExtraReturn> => {
  const validatedFields = extraSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.doorExtraImage.findMany({
        where: { doorExtraId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.doorExtraImage.deleteMany({
        where: { doorExtraId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/extras",
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
      const updatedExtra = await prisma.doorExtra.update({
        where: { id },
        data: {
          ...validatedFields.data,
          images: { create: validImages },
        },
        include: {
          images: true,
        },
      });

      return {
        success: "Extra actualizado con éxito",
        extra: updatedExtra,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar el extra. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el extra. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createExtra,
  deleteExtra,
  deleteMultipleExtras,
  readExtras,
  updateExtra,
};
