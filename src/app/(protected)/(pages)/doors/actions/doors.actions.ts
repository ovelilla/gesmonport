"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
import {
  filterValidImages,
  uploadImage,
  deleteImage,
} from "@/lib/cloudinary/cloudinary";
// Schemas
import { doorSchema } from "../schemas/door.schema";
// Types
import type {
  CreateDoorProps,
  CreateDoorReturn,
  DeleteDoorProps,
  DeleteDoorReturn,
  DeleteMultipleDoorsProps,
  DeleteMultipleDoorsReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadGlassReturn,
  ReadDoorsReturn,
  ReadTypesReturn,
  UpdateDoorProps,
  UpdateDoorReturn,
} from "./types/doors.actions.types";

const createDoor = async ({
  newImages,
  values,
}: CreateDoorProps): Promise<CreateDoorReturn> => {
  const validatedFields = doorSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/doors",
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
      const newDoor = await prisma.door.create({
        data: {
          ...validatedFields.data,
          images: {
            create: validImages,
          },
          glass: {
            create: validatedFields.data.glass.map((glassId) => ({ glassId })),
          },
        },
        include: {
          family: true,
          finish: true,
          glass: true,
          images: true,
          type: true,
        },
      });

      const door = {
        ...newDoor,
        glass: newDoor.glass.map((g) => g.glassId),
      }

      return { success: "Puerta creada con éxito", door };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al crear la puerta. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la puerta. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteDoor = async ({
  id,
}: DeleteDoorProps): Promise<DeleteDoorReturn> => {
  try {
    const images = await prisma.doorImage.findMany({
      where: { doorId: id },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.door.delete({ where: { id } });
    return { success: "Puerta eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar la puerta. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleDoors = async ({
  ids,
}: DeleteMultipleDoorsProps): Promise<DeleteMultipleDoorsReturn> => {
  try {
    const images = await prisma.doorImage.findMany({
      where: { doorId: { in: ids } },
      select: { publicId: true },
    });

    await Promise.all(images.map((img) => deleteImage(img.publicId)));

    await prisma.door.deleteMany({ where: { id: { in: ids } } });
    return { success: "Puertas eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar las puertas. Por favor, inténtalo de nuevo",
    };
  }
};

const readFamilies = async (): Promise<ReadFamiliesReturn> => {
  try {
    const families = await prisma.doorFamily.findMany({
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
    const finishes = await prisma.doorFinish.findMany({
      orderBy: { name: "asc" },
    });
    return finishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readGlass = async (): Promise<ReadGlassReturn> => {
  try {
    const glass = await prisma.glass.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        images: true,
        model: true,
        type: true,
      },
    });
    return glass;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readDoors = async (): Promise<ReadDoorsReturn> => {
  try {
    const doorsRaw = await prisma.door.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        glass: { select: { glassId: true } },
        images: true,
        type: true,
      },
    });
    const doors = doorsRaw.map((door) => ({
      ...door,
      glass: door.glass.map((g) => g.glassId),
    }));
    return doors;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readTypes = async (): Promise<ReadTypesReturn> => {
  try {
    const types = await prisma.doorType.findMany({
      orderBy: { name: "asc" },
    });
    return types;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateDoor = async ({
  id,
  newImages,
  toDelete,
  values,
}: UpdateDoorProps): Promise<UpdateDoorReturn> => {
  const validatedFields = doorSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (toDelete.length > 0) {
      const imagesToDelete = await prisma.doorImage.findMany({
        where: { doorId: id, url: { in: toDelete } },
        select: { publicId: true },
      });

      const cloudinaryPublicIds = imagesToDelete.map((img) => img.publicId);

      await Promise.all(cloudinaryPublicIds.map(deleteImage));

      await prisma.doorImage.deleteMany({
        where: { doorId: id, url: { in: toDelete } },
      });
    }

    const uploadedImages = await Promise.all(
      (newImages ?? []).map((image) =>
        uploadImage({
          file: image,
          folder: "door/doors",
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
      const updatedDoor = await prisma.door.update({
        where: { id },
        data: {
          ...validatedFields.data,
          glass: {
            deleteMany: {},
            create: validatedFields.data.glass.map((glassId) => ({ glassId })),
          },
          images: {
            create: validImages,
          },
        },
        include: {
          family: true,
          finish: true,
          glass: true,
          images: true,
          type: true,
        },
      });

      const door = {
        ...updatedDoor,
        glass: updatedDoor.glass.map((g) => g.glassId),
      };

      return {
        success: "Puerta actualizada con éxito",
        door,
      };
    } catch (error) {
      console.error(error);
      await Promise.all(validImages.map((img) => deleteImage(img.publicId)));
      return {
        error: "Error al actualizar la puerta. Por favor, inténtalo de nuevo",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar la puerta. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createDoor,
  deleteDoor,
  deleteMultipleDoors,
  readFamilies,
  readFinishes,
  readGlass,
  readDoors,
  readTypes,
  updateDoor,
};
