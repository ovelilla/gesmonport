import type {
  FrameFinish as PrismaFrameFinish,
  FrameModel as PrismaFrameModel,
  FrameModelImage,
} from "@/generated/prisma";

type Finish = PrismaFrameFinish;

type Model = PrismaFrameModel & {
  finishes: PrismaFrameFinish[];
  images: FrameModelImage[];
};

export type { Model, Finish };
