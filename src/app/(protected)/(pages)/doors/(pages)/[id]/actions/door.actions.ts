"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadDoorProps,
  ReadDoorReturn,
  SaveDoorPricesProps,
  SaveDoorPricesReturn,
} from "./types/door.actions.types";

const readDoor = async ({
  id,
}: ReadDoorProps): Promise<ReadDoorReturn | null> => {
  try {
    const door = await prisma.door.findUnique({
      where: { id },
      include: {
        family: true,
        finish: true,
        images: true,
        prices: true,
        type: true,
      },
    });

    if (!door) {
      return null;
    }

    return door;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveDoorPrices = async ({
  doorId,
  prices,
}: SaveDoorPricesProps): Promise<SaveDoorPricesReturn> => {
  try {
    await prisma.doorPrice.deleteMany({ where: { doorId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.doorPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        doorId,
      })),
    });

    return {
      prices: savePrices,
      success: "Precios guardados con éxito",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al guardar los precios. Por favor, inténtalo de nuevo",
    };
  }
};

export { readDoor };
