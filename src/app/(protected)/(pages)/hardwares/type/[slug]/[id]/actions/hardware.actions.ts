"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadHardwareProps,
  ReadHardwareReturn,
} from "./types/hardware.actions.types";

const readHardware = async ({
  id,
}: ReadHardwareProps): Promise<ReadHardwareReturn | null> => {
  try {
    const hardware = await prisma.hardware.findUnique({
      where: { id },
      include: {
        doorTypes: {
          include: {
            doorType: true,
          },
        },
        finish: true,
        images: true,
        type: true,
      },
    });

    if (!hardware) {
      return null;
    }

    const transformed = {
      ...hardware,
      doorTypes: hardware.doorTypes.map((dt) => dt.doorType),
    };

    return transformed;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { readHardware };
