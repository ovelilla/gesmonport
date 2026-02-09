"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadGlassFinishProps,
  ReadGlassFinishReturn,
  SaveGlassFinishPricesProps,
  SaveGlassFinishPricesReturn,
} from "./types/glass-finish.actions.types";

const readGlassFinish = async ({
  id,
}: ReadGlassFinishProps): Promise<ReadGlassFinishReturn | null> => {
  try {
    const glassFinish = await prisma.glassFinish.findUnique({
      where: { id },
      include: {
        images: true,
        prices: true,
      },
    });

    if (!glassFinish) {
      return null;
    }

    return glassFinish;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveGlassFinishPrices = async ({
  glassFinishId,
  prices,
}: SaveGlassFinishPricesProps): Promise<SaveGlassFinishPricesReturn> => {
  try {
    await prisma.glassFinishPrice.deleteMany({ where: { glassFinishId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.glassFinishPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        glassFinishId,
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

export { readGlassFinish };
