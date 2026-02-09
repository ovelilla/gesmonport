// Types
import type {
  HardwareFinish as PrismaHardwareFinish,
  HardwareFinishImage,
} from "@/generated/prisma";

type Finish = PrismaHardwareFinish & { images: HardwareFinishImage[] };

export type { Finish };
