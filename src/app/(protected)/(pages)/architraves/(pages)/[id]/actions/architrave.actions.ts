"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadArchitraveProps,
  ReadArchitraveReturn,
  SaveArchitravePricesProps,
  SaveArchitravePricesReturn,
} from "./types/architrave.actions.types";

const readArchitrave = async ({
  id,
}: ReadArchitraveProps): Promise<ReadArchitraveReturn | null> => {
  try {
    const architrave = await prisma.architrave.findUnique({
      where: { id },
      include: {
        family: true,
        finish: true,
        images: true,
        prices: true,
        type: true,
      },
    });

    if (!architrave) {
      return null;
    }

    return architrave;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveArchitravePrices = async ({
  architraveId,
  prices,
}: SaveArchitravePricesProps): Promise<SaveArchitravePricesReturn> => {
  try {
    await prisma.architravePrice.deleteMany({ where: { architraveId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.architravePrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        architraveId,
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

export { readArchitrave };
