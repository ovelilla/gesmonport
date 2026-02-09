"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadGlassModelProps,
  ReadGlassModelReturn,
  SaveGlassModelPricesProps,
  SaveGlassModelPricesReturn,
} from "./types/glass-model.actions.types";

const readGlassModel = async ({
  id,
}: ReadGlassModelProps): Promise<ReadGlassModelReturn | null> => {
  try {
    const glassModel = await prisma.glassModel.findUnique({
      where: { id },
      include: {
        finishes: {
          include: { glassFinish: true },
        },
        images: true,
        prices: true,
      },
    });

    if (!glassModel) {
      return null;
    }

    const transformed = {
      ...glassModel,
      finishes: glassModel.finishes.map((finish) => finish.glassFinish),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveGlassModelPrices = async ({
  glassModelId,
  prices,
}: SaveGlassModelPricesProps): Promise<SaveGlassModelPricesReturn> => {
  try {
    await prisma.glassModelPrice.deleteMany({ where: { glassModelId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.glassModelPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        glassModelId,
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

export { readGlassModel };
