import {
  Frame as PrismaFrame,
  FrameFamily,
  FrameFinish,
  FrameImage,
  FramePrice as PrismaFramePrice,
  FrameType,
} from "@prisma/client";

type Frame = PrismaFrame & {
  family: FrameFamily;
  finish: FrameFinish;
  images: FrameImage[];
  prices: FramePrice[];
  type: FrameType;
};

type FramePrice = PrismaFramePrice;

export type { Frame, FramePrice };
