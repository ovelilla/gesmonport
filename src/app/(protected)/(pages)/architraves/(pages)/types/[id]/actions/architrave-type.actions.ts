"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadArchitraveTypeProps,
  ReadArchitraveTypeReturn,
  SaveArchitraveTypePricesProps,
  SaveArchitraveTypePricesReturn,
} from "./types/architrave-type.actions.types";

const readArchitraveType = async ({
  id,
}: ReadArchitraveTypeProps): Promise<ReadArchitraveTypeReturn | null> => {
  try {
    const architraveType = await prisma.architraveType.findUnique({
      where: { id },
      include: {
        families: {
          include: {
            architraveFamily: true,
          },
        },
        images: true,
        prices: true,
      },
    });

    if (!architraveType) {
      return null;
    }

    const transformed = {
      ...architraveType,
      families: architraveType.families.map(
        (family) => family.architraveFamily,
      ),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveArchitraveTypePrices = async ({
  architraveTypeId,
  prices,
}: SaveArchitraveTypePricesProps): Promise<SaveArchitraveTypePricesReturn> => {
  try {
    await prisma.architraveTypePrice.deleteMany({
      where: { architraveTypeId },
    });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.architraveTypePrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        architraveTypeId,
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

export { readArchitraveType };
