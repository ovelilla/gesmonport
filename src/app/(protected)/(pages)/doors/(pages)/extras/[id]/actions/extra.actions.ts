"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadExtraProps,
  ReadExtraReturn,
} from "./types/extra.actions.types";

const readExtra = async ({
  id,
}: ReadExtraProps): Promise<ReadExtraReturn | null> => {
  try {
    const extra = await prisma.doorExtra.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });

    if (!extra) {
      return null;
    }

    return extra;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { readExtra };
