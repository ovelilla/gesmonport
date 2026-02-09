import {
  FrameFamily as PrismaFrameFamily,
  FrameFamilyImage,
  FrameModel as PrismaFrameModel,
} from "@/generated/prisma";

type Family = PrismaFrameFamily & {
  images: FrameFamilyImage[];
  models: PrismaFrameModel[];
};

type Model = PrismaFrameModel;

export type { Family, Model };
