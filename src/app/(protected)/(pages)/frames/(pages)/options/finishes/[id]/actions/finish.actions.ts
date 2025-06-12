"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadFinishProps,
  ReadFinishReturn,
} from "./types/finish.actions.types";

const readFinish = async ({
  id,
}: ReadFinishProps): Promise<ReadFinishReturn | null> => {
  try {
    const finish = await prisma.frameFinish.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });

    if (!finish) {
      return null;
    }

    return finish;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { readFinish };
