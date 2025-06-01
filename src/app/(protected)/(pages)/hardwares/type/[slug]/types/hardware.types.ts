import {
  Hardware as PrismaHardware,
  HardwareFinish as PrismaHardwareFinish,
  HardwareImage,
  HardwareType as PrismaHardwareType,
} from "@prisma/client";

type Hardware = PrismaHardware & { images: HardwareImage[] };

type HardwareFinish = PrismaHardwareFinish;

type HardwareType = PrismaHardwareType;

export type { Hardware, HardwareFinish, HardwareType };
