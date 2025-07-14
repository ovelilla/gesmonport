"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadGlassProps,
  ReadGlassReturn,
  SaveGlassPricesProps,
  SaveGlassPricesReturn,
} from "./types/glass.actions.types";

const readGlass = async ({
  id,
}: ReadGlassProps): Promise<ReadGlassReturn | null> => {
  try {
    const glass = await prisma.glass.findUnique({
      where: { id },
      include: {
        family: true,
        finish: true,
        images: true,
        model: true,
        prices: true,
        type: true,
      },
    });

    if (!glass) {
      return null;
    }

    return glass;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveGlassPrices = async ({
  glassId,
  prices,
}: SaveGlassPricesProps): Promise<SaveGlassPricesReturn> => {
  try {
    await prisma.glassPrice.deleteMany({ where: { glassId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.glassPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        glassId,
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

export { readGlass };
