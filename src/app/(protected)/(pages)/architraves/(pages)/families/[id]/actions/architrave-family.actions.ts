"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadArchitraveFamilyProps,
  ReadArchitraveFamilyReturn,
  SaveArchitraveFamilyPricesProps,
  SaveArchitraveFamilyPricesReturn,
} from "./types/architrave-family.actions.types";

const readArchitraveFamily = async ({
  id,
}: ReadArchitraveFamilyProps): Promise<ReadArchitraveFamilyReturn | null> => {
  try {
    const architraveFamily = await prisma.architraveFamily.findUnique({
      where: { id },
      include: {
        images: true,
        models: {
          include: {
            architraveModel: true,
          },
        },
        prices: true,
      },
    });

    if (!architraveFamily) {
      return null;
    }

    const transformed = {
      ...architraveFamily,
      models: architraveFamily.models.map((model) => model.architraveModel),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveArchitraveFamilyPrices = async ({
  architraveFamilyId,
  prices,
}: SaveArchitraveFamilyPricesProps): Promise<SaveArchitraveFamilyPricesReturn> => {
  try {
    await prisma.architraveFamilyPrice.deleteMany({
      where: { architraveFamilyId },
    });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.architraveFamilyPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        architraveFamilyId,
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

export { readArchitraveFamily };
