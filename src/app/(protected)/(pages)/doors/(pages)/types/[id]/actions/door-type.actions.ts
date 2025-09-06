"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadDoorTypeProps,
  ReadDoorTypeReturn,
  SaveDoorTypePricesProps,
  SaveDoorTypePricesReturn,
} from "./types/door-type.actions.types";

const readDoorType = async ({
  id,
}: ReadDoorTypeProps): Promise<ReadDoorTypeReturn | null> => {
  try {
    const doorType = await prisma.doorType.findUnique({
      where: { id },
      include: {
        images: true,
        prices: true,
      },
    });

    if (!doorType) {
      return null;
    }

    return doorType;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveDoorTypePrices = async ({
  doorTypeId,
  prices,
}: SaveDoorTypePricesProps): Promise<SaveDoorTypePricesReturn> => {
  try {
    await prisma.doorTypePrice.deleteMany({ where: { doorTypeId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.doorTypePrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        doorTypeId,
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

export { readDoorType };
