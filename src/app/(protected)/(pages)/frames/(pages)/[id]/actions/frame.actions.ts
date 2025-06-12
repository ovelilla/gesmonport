"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadFrameProps,
  ReadFrameReturn,
  SaveFramePricesProps,
  SaveFramePricesReturn,
} from "./types/frame.actions.types";

const readFrame = async ({
  id,
}: ReadFrameProps): Promise<ReadFrameReturn | null> => {
  try {
    const frame = await prisma.frame.findUnique({
      where: { id },
      include: {
        family: true,
        finish: true,
        images: true,
        prices: true,
        type: true,
      },
    });

    if (!frame) {
      return null;
    }

    return frame;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveFramePrices = async ({
  frameId,
  prices,
}: SaveFramePricesProps): Promise<SaveFramePricesReturn> => {
  try {
    await prisma.framePrice.deleteMany({ where: { frameId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.framePrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        frameId,
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

export { readFrame };
