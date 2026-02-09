"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadFrameModelProps,
  ReadFrameModelReturn,
  SaveFrameModelPricesProps,
  SaveFrameModelPricesReturn,
} from "./types/frame-model.actions.types";

const readFrameModel = async ({
  id,
}: ReadFrameModelProps): Promise<ReadFrameModelReturn | null> => {
  try {
    const frameModel = await prisma.frameModel.findUnique({
      where: { id },
      include: {
        finishes: {
          include: { frameFinish: true },
        },
        images: true,
        prices: true,
      },
    });

    if (!frameModel) {
      return null;
    }

    const transformed = {
      ...frameModel,
      finishes: frameModel.finishes.map((finish) => finish.frameFinish),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveFrameModelPrices = async ({
  frameModelId,
  prices,
}: SaveFrameModelPricesProps): Promise<SaveFrameModelPricesReturn> => {
  try {
    await prisma.frameModelPrice.deleteMany({ where: { frameModelId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.frameModelPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        frameModelId,
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

export { readFrameModel };
