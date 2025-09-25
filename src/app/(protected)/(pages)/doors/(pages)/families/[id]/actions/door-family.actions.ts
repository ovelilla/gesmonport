"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadDoorFamilyProps,
  ReadDoorFamilyReturn,
  SaveDoorFamilyPricesProps,
  SaveDoorFamilyPricesReturn,
} from "./types/door-family.actions.types";

const readDoorFamily = async ({
  id,
}: ReadDoorFamilyProps): Promise<ReadDoorFamilyReturn | null> => {
  try {
    const doorFamily = await prisma.doorFamily.findUnique({
      where: { id },
      include: {
        images: true,
        models: {
          include: {
            doorModel: true,
          },
        },
        prices: true,
      },
    });

    if (!doorFamily) {
      return null;
    }

    const transformed = {
      ...doorFamily,
      models: doorFamily.models.map((model) => model.doorModel),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveDoorFamilyPrices = async ({
  doorFamilyId,
  prices,
}: SaveDoorFamilyPricesProps): Promise<SaveDoorFamilyPricesReturn> => {
  try {
    await prisma.doorFamilyPrice.deleteMany({ where: { doorFamilyId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.doorFamilyPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        doorFamilyId,
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

export { readDoorFamily };
