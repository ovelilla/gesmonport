import {
  FrameFamily as PrismaFrameFamily,
  FrameFamilyImage,
  FrameModel,
  FrameFamilyPrice as PrismaFrameFamilyPrice,
} from "@/generated/prisma";

type FrameFamily = PrismaFrameFamily & {
  images: FrameFamilyImage[];
  models: FrameModel[];
  prices: FrameFamilyPrice[];
};

type FrameFamilyPrice = PrismaFrameFamilyPrice;

export type { FrameFamily, FrameFamilyPrice };
