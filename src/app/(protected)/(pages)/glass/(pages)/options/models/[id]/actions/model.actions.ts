"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadModelProps,
  ReadModelReturn,
} from "./types/model.actions.types";

const readModel = async ({
  id,
}: ReadModelProps): Promise<ReadModelReturn | null> => {
  try {
    const model = await prisma.glassModel.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });

    if (!model) {
      return null;
    }

    return model;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { readModel };
