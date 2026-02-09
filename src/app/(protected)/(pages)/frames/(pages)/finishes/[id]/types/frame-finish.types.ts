import {
  FrameFinish as PrismaFrameFinish,
  FrameFinishImage,
  FrameFinishPrice as PrismaFrameFinishPrice,
} from "@/generated/prisma/client";

type FrameFinish = PrismaFrameFinish & {
  images: FrameFinishImage[];
  prices: FrameFinishPrice[];
};

type FrameFinishPrice = PrismaFrameFinishPrice;

export type { FrameFinish, FrameFinishPrice };
