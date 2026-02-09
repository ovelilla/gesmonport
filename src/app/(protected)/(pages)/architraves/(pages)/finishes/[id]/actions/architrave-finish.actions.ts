"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadArchitraveFinishProps,
  ReadArchitraveFinishReturn,
  SaveArchitraveFinishPricesProps,
  SaveArchitraveFinishPricesReturn,
} from "./types/architrave-finish.actions.types";

const readArchitraveFinish = async ({
  id,
}: ReadArchitraveFinishProps): Promise<ReadArchitraveFinishReturn | null> => {
  try {
    const architraveFinish = await prisma.architraveFinish.findUnique({
      where: { id },
      include: {
        images: true,
        prices: true,
      },
    });

    if (!architraveFinish) {
      return null;
    }

    return architraveFinish;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveArchitraveFinishPrices = async ({
  architraveFinishId,
  prices,
}: SaveArchitraveFinishPricesProps): Promise<SaveArchitraveFinishPricesReturn> => {
  try {
    await prisma.architraveFinishPrice.deleteMany({
      where: { architraveFinishId },
    });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.architraveFinishPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        architraveFinishId,
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

export { readArchitraveFinish };
