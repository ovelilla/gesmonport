"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadFrameFamilyProps,
  ReadFrameFamilyReturn,
  SaveFrameFamilyPricesProps,
  SaveFrameFamilyPricesReturn,
} from "./types/frame-family.actions.types";

const readFrameFamily = async ({
  id,
}: ReadFrameFamilyProps): Promise<ReadFrameFamilyReturn | null> => {
  try {
    const frameFamily = await prisma.frameFamily.findUnique({
      where: { id },
      include: {
        images: true,
        models: {
          include: {
            frameModel: true,
          },
        },
        prices: true,
      },
    });

    if (!frameFamily) {
      return null;
    }

    const transformed = {
      ...frameFamily,
      models: frameFamily.models.map((model) => model.frameModel),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveFrameFamilyPrices = async ({
  frameFamilyId,
  prices,
}: SaveFrameFamilyPricesProps): Promise<SaveFrameFamilyPricesReturn> => {
  try {
    await prisma.frameFamilyPrice.deleteMany({ where: { frameFamilyId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.frameFamilyPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        frameFamilyId,
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

export { readFrameFamily };
