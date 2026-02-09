"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadFrameFinishProps,
  ReadFrameFinishReturn,
  SaveFrameFinishPricesProps,
  SaveFrameFinishPricesReturn,
} from "./types/frame-finish.actions.types";

const readFrameFinish = async ({
  id,
}: ReadFrameFinishProps): Promise<ReadFrameFinishReturn | null> => {
  try {
    const frameFinish = await prisma.frameFinish.findUnique({
      where: { id },
      include: {
        images: true,
        prices: true,
      },
    });

    if (!frameFinish) {
      return null;
    }

    return frameFinish;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveFrameFinishPrices = async ({
  frameFinishId,
  prices,
}: SaveFrameFinishPricesProps): Promise<SaveFrameFinishPricesReturn> => {
  try {
    await prisma.frameFinishPrice.deleteMany({ where: { frameFinishId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.frameFinishPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        frameFinishId,
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

export { readFrameFinish };
