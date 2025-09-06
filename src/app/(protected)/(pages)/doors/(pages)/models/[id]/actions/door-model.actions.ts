"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadDoorModelProps,
  ReadDoorModelReturn,
  SaveDoorModelPricesProps,
  SaveDoorModelPricesReturn,
} from "./types/door-model.actions.types";

const readDoorModel = async ({
  id,
}: ReadDoorModelProps): Promise<ReadDoorModelReturn | null> => {
  try {
    const doorModel = await prisma.doorModel.findUnique({
      where: { id },
      include: {
        images: true,
        prices: true,
      },
    });

    if (!doorModel) {
      return null;
    }

    return doorModel;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveDoorModelPrices = async ({
  doorModelId,
  prices,
}: SaveDoorModelPricesProps): Promise<SaveDoorModelPricesReturn> => {
  try {
    await prisma.doorModelPrice.deleteMany({ where: { doorModelId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.doorModelPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        doorModelId,
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

export { readDoorModel };
