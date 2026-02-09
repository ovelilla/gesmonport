import {
  FrameFinish as PrismaFrameFinish,
  FrameFinishImage,
} from "@/generated/prisma/client";

type Finish = PrismaFrameFinish & { images: FrameFinishImage[] };

export type { Finish };
