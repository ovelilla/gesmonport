"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadGlassFamilyProps,
  ReadGlassFamilyReturn,
  SaveGlassFamilyPricesProps,
  SaveGlassFamilyPricesReturn,
} from "./types/glass-family.actions.types";

const readGlassFamily = async ({
  id,
}: ReadGlassFamilyProps): Promise<ReadGlassFamilyReturn | null> => {
  try {
    const glassFamily = await prisma.glassFamily.findUnique({
      where: { id },
      include: {
        images: true,
        models: {
          include: {
            glassModel: true,
          },
        },
        prices: true,
      },
    });

    if (!glassFamily) {
      return null;
    }

    const transformed = {
      ...glassFamily,
      models: glassFamily.models.map((model) => model.glassModel),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveGlassFamilyPrices = async ({
  glassFamilyId,
  prices,
}: SaveGlassFamilyPricesProps): Promise<SaveGlassFamilyPricesReturn> => {
  try {
    await prisma.glassFamilyPrice.deleteMany({ where: { glassFamilyId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.glassFamilyPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        glassFamilyId,
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

export { readGlassFamily };
