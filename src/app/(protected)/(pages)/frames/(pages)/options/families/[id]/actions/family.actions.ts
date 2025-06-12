"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadFamilyProps,
  ReadFamilyReturn,
} from "./types/family.actions.types";

const readFamily = async ({
  id,
}: ReadFamilyProps): Promise<ReadFamilyReturn | null> => {
  try {
    const family = await prisma.frameFamily.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });

    if (!family) {
      return null;
    }

    return family;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { readFamily };
