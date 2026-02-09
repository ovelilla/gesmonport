"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadArchitraveModelProps,
  ReadArchitraveModelReturn,
  SaveArchitraveModelPricesProps,
  SaveArchitraveModelPricesReturn,
} from "./types/architrave-model.actions.types";

const readArchitraveModel = async ({
  id,
}: ReadArchitraveModelProps): Promise<ReadArchitraveModelReturn | null> => {
  try {
    const architraveModel = await prisma.architraveModel.findUnique({
      where: { id },
      include: {
        finishes: {
          include: { architraveFinish: true },
        },
        images: true,
        prices: true,
      },
    });

    if (!architraveModel) {
      return null;
    }

    const transformed = {
      ...architraveModel,
      finishes: architraveModel.finishes.map(
        (finish) => finish.architraveFinish,
      ),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveArchitraveModelPrices = async ({
  architraveModelId,
  prices,
}: SaveArchitraveModelPricesProps): Promise<SaveArchitraveModelPricesReturn> => {
  try {
    await prisma.architraveModelPrice.deleteMany({
      where: { architraveModelId },
    });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.architraveModelPrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        architraveModelId,
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

export { readArchitraveModel };
