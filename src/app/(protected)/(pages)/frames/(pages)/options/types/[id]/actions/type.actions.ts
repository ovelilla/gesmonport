"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type { ReadTypeProps, ReadTypeReturn } from "./types/type.actions.types";

const readType = async ({
  id,
}: ReadTypeProps): Promise<ReadTypeReturn | null> => {
  try {
    const type = await prisma.frameType.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });

    if (!type) {
      return null;
    }

    return type;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { readType };
