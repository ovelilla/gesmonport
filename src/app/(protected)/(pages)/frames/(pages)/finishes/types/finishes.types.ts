import {
  FrameFinish as PrismaFrameFinish,
  FrameFinishImage,
} from "@/generated/prisma";

type Finish = PrismaFrameFinish & { images: FrameFinishImage[] };

export type { Finish };
