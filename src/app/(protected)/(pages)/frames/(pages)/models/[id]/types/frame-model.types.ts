import {
  FrameFinish,
  FrameModel as PrismaFrameModel,
  FrameModelImage,
  FrameModelPrice as PrismaFrameModelPrice,
} from "@/generated/prisma/client";

type FrameModel = PrismaFrameModel & {
  finishes: FrameFinish[];
  images: FrameModelImage[];
  prices: FrameModelPrice[];
};

type FrameModelPrice = PrismaFrameModelPrice;

export type { FrameModel, FrameModelPrice };
