"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadGlassTypeProps,
  ReadGlassTypeReturn,
  SaveGlassTypePricesProps,
  SaveGlassTypePricesReturn,
} from "./types/glass-type.actions.types";

const readGlassType = async ({
  id,
}: ReadGlassTypeProps): Promise<ReadGlassTypeReturn | null> => {
  try {
    const glassType = await prisma.glassType.findUnique({
      where: { id },
      include: {
        families: {
          include: {
            glassFamily: true,
          },
        },
        images: true,
        prices: true,
      },
    });

    if (!glassType) {
      return null;
    }

    const transformed = {
      ...glassType,
      families: glassType.families.map((family) => family.glassFamily),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveGlassTypePrices = async ({
  glassTypeId,
  prices,
}: SaveGlassTypePricesProps): Promise<SaveGlassTypePricesReturn> => {
  try {
    await prisma.glassTypePrice.deleteMany({ where: { glassTypeId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.glassTypePrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        glassTypeId,
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

export { readGlassType };
