"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { hardwareSchema } from "../schemas/hardware.schema";
// Types
import type {
  CreateHardwareProps,
  CreateHardwareReturn,
  DeleteHardwareProps,
  DeleteHardwareReturn,
  DeleteMultipleHardwareProps,
  DeleteMultipleHardwareReturn,
  ReadHardwaresProps,
  ReadHardwaresReturn,
  ReadHardwareFinishesReturn,
  ReadHardwareTypeProps,
  ReadHardwareTypeReturn,
  UpdateHardwareProps,
  UpdateHardwareReturn,
} from "./types/hardware.actions.types";

const createHardware = async ({
  newImages,
  slug,
  values,
}: CreateHardwareProps): Promise<CreateHardwareReturn> => {
  const validatedFields = hardwareSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const existingHardwareType = await prisma.hardwareType.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!existingHardwareType) {
      return { error: "Tipo de herraje no encontrado" };
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: `hardware/${existingHardwareType.id}`,
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
      const newHardware = await prisma.hardware.create({
        data: {
          ...validatedFields.data,
          typeId: existingHardwareType.id,
          images: {
            create: validImages,
          },
        },
        include: {
          images: true,
        },
      });

      return { success: "Herraje creado con éxito", hardware: newHardware };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear el herraje. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el herraje. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteHardware = async ({
  id,
}: DeleteHardwareProps): Promise<DeleteHardwareReturn> => {
  try {
    const images = await prisma.hardwareImage.findMany({
      where: { hardwareId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.hardware.delete({ where: { id } });
    return { success: "Herraje eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el herraje. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleHardware = async ({
  ids,
}: DeleteMultipleHardwareProps): Promise<DeleteMultipleHardwareReturn> => {
  try {
    const images = await prisma.hardwareImage.findMany({
      where: { hardwareId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.hardware.deleteMany({ where: { id: { in: ids } } });
    return { success: "Herrajes eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los herrajes. Por favor, inténtalo de nuevo",
    };
  }
};

const readHardwares = async ({
  slug,
}: ReadHardwaresProps): Promise<ReadHardwaresReturn> => {
  try {
    const hardwareType = await prisma.hardwareType.findUnique({
      where: { slug },
      select: { id: true },
    });

    const hardwareItems = await prisma.hardware.findMany({
      where: { typeId: hardwareType?.id },
      orderBy: { price: "asc" },
      include: { images: true },
    });

    return hardwareItems ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readHardwareFinishes = async (): Promise<ReadHardwareFinishesReturn> => {
  try {
    const finishes = await prisma.hardwareFinish.findMany({
      orderBy: { name: "asc" },
    });

    return finishes ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readHardwareType = async ({
  slug,
}: ReadHardwareTypeProps): Promise<ReadHardwareTypeReturn> => {
  try {
    const hardware = await prisma.hardwareType.findUnique({
      where: { slug },
    });

    if (!hardware) {
      return null;
    }

    return hardware;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateHardware = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateHardwareProps): Promise<UpdateHardwareReturn> => {
  const validatedFields = hardwareSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.hardwareImage.findMany({
        where: { hardwareId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.hardwareImage.deleteMany({
        where: { hardwareId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: `hardware/${id}`,
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
      const updatedHardware = await prisma.hardware.update({
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
        success: "Herraje actualizado con éxito",
        hardware: updatedHardware,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar el herraje. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el herraje. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createHardware,
  deleteHardware,
  deleteMultipleHardware,
  readHardwares,
  readHardwareFinishes,
  readHardwareType,
  updateHardware,
};
