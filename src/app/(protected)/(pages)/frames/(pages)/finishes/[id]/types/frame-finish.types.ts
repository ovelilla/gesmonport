import {
  FrameFinish as PrismaFrameFinish,
  FrameFinishImage,
  FrameFinishPrice as PrismaFrameFinishPrice,
} from "@/generated/prisma";

type FrameFinish = PrismaFrameFinish & {
  images: FrameFinishImage[];
  prices: FrameFinishPrice[];
};

type FrameFinishPrice = PrismaFrameFinishPrice;

export type { FrameFinish, FrameFinishPrice };
