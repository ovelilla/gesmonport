import {
  HardwareType as PrismaHardwareType,
  HardwareTypeImage,
} from "@prisma/client";

type Type = PrismaHardwareType & { images: HardwareTypeImage[] };

export type { Type };
