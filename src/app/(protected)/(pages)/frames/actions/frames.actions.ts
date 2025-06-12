"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { frameSchema } from "../schemas/frame.schema";
// Types
import type {
  CreateFrameProps,
  CreateFrameReturn,
  DeleteFrameProps,
  DeleteFrameReturn,
  DeleteMultipleFramesProps,
  DeleteMultipleFramesReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadFramesReturn,
  ReadTypesReturn,
  UpdateFrameProps,
  UpdateFrameReturn,
} from "./types/frames.actions.types";

const createFrame = async ({
  newImages,
  values,
}: CreateFrameProps): Promise<CreateFrameReturn> => {
  const validatedFields = frameSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "frame/frames",
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
      const newFrame = await prisma.frame.create({
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

      return { success: "Marco creado con éxito", frame: newFrame };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el marco. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el marco. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteFrame = async ({
  id,
}: DeleteFrameProps): Promise<DeleteFrameReturn> => {
  try {
    const images = await prisma.frameImage.findMany({
      where: { frameId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.frame.delete({ where: { id } });
    return { success: "Marco eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el marco. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleFrames = async ({
  ids,
}: DeleteMultipleFramesProps): Promise<DeleteMultipleFramesReturn> => {
  try {
    const images = await prisma.frameImage.findMany({
      where: { frameId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.frame.deleteMany({ where: { id: { in: ids } } });
    return { success: "Marcos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los marcos. Por favor, inténtalo de nuevo",
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

const readFinishes = async (): Promise<ReadFinishesReturn> => {
  try {
    const finishes = await prisma.frameFinish.findMany({
      orderBy: { name: "asc" },
    });
    return finishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readFrames = async (): Promise<ReadFramesReturn> => {
  try {
    const frames = await prisma.frame.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        images: true,
        type: true,
      },
    });
    return frames;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readTypes = async (): Promise<ReadTypesReturn> => {
  try {
    const types = await prisma.frameType.findMany({
      orderBy: { name: "asc" },
    });
    return types;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateFrame = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateFrameProps): Promise<UpdateFrameReturn> => {
  const validatedFields = frameSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.frameImage.findMany({
        where: { frameId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.frameImage.deleteMany({
        where: { frameId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "frame/frames",
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
      const updatedFrame = await prisma.frame.update({
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
        success: "Marco actualizado con éxito",
        frame: updatedFrame,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar el marco. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el marco. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createFrame,
  deleteFrame,
  deleteMultipleFrames,
  readFamilies,
  readFinishes,
  readFrames,
  readTypes,
  updateFrame,
};
