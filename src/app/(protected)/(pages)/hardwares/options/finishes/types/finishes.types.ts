import {
  HardwareFinish as PrismaHardwareFinish,
  HardwareFinishImage,
} from "@/generated/prisma/client";

type Finish = PrismaHardwareFinish & { images: HardwareFinishImage[] };

export type { Finish };
