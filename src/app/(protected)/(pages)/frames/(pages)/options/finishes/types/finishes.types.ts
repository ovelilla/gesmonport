import {
  FrameFinish as PrismaFrameFinish,
  FrameFinishImage,
} from "@prisma/client";

type Finish = PrismaFrameFinish & { images: FrameFinishImage[] };

export type { Finish };
