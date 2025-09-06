"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadDoorFinishProps,
  ReadDoorFinishReturn,
  SaveDoorFinishPricesProps,
  SaveDoorFinishPricesReturn,
} from "./types/door-finish.actions.types";

const readDoorFinish = async ({
  id,
}: ReadDoorFinishProps): Promise<ReadDoorFinishReturn | null> => {
  try {
    const doorFinish = await prisma.doorFinish.findUnique({
      where: { id },
      include: {
        images: true,
        prices: true,
      },
    });

    if (!doorFinish) {
      return null;
    }

    return doorFinish;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveDoorFinishPrices = async ({
  doorFinishId,
  prices,
}: SaveDoorFinishPricesProps): Promise<SaveDoorFinishPricesReturn> => {
  try {
    await prisma.doorFinishPrice.deleteMany({ where: { doorFinishId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.doorFinishPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        doorFinishId,
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

export { readDoorFinish };
