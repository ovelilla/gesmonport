import type {
  FrameFinish as PrismaFrameFinish,
  FrameModel as PrismaFrameModel,
  FrameModelImage,
} from "@/generated/prisma/client";

type Finish = PrismaFrameFinish;

type Model = PrismaFrameModel & {
  finishes: PrismaFrameFinish[];
  images: FrameModelImage[];
};

export type { Model, Finish };
