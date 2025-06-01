import {
  HardwareFinish as PrismaHardwareFinish,
  HardwareFinishImage,
} from "@prisma/client";

type Finish = PrismaHardwareFinish & { images: HardwareFinishImage[] };

export type { Finish };
