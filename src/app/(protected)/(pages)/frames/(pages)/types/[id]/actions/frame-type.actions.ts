"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadFrameTypeProps,
  ReadFrameTypeReturn,
  SaveFrameTypePricesProps,
  SaveFrameTypePricesReturn,
} from "./types/frame-type.actions.types";

const readFrameType = async ({
  id,
}: ReadFrameTypeProps): Promise<ReadFrameTypeReturn | null> => {
  try {
    const frameType = await prisma.frameType.findUnique({
      where: { id },
      include: {
        families: {
          include: {
            frameFamily: true,
          },
        },
        images: true,
        prices: true,
      },
    });

    if (!frameType) {
      return null;
    }

    const transformed = {
      ...frameType,
      families: frameType.families.map((family) => family.frameFamily),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveFrameTypePrices = async ({
  frameTypeId,
  prices,
}: SaveFrameTypePricesProps): Promise<SaveFrameTypePricesReturn> => {
  try {
    await prisma.frameTypePrice.deleteMany({ where: { frameTypeId } });

    if (!prices.length) {
      return { success: "Precios eliminados con éxito" };
    }

    const savePrices = await prisma.frameTypePrice.createManyAndReturn({
      data: prices.map((price) => ({
        ...price,
        frameTypeId,
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

export { readFrameType };
