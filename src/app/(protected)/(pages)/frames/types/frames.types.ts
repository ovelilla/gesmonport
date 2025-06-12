import {
  Frame as PrismaFrame,
  FrameFamily as PrismaFrameFamily,
  FrameFinish as PrismaFrameFinish,
  FrameImage,
  FrameType as PrismaFrameType,
} from "@prisma/client";

type Family = PrismaFrameFamily;

type Finish = PrismaFrameFinish;

type Frame = PrismaFrame & {
  family: PrismaFrameFamily;
  finish: PrismaFrameFinish;
  images: FrameImage[];
  type: PrismaFrameType;
};

type Type = PrismaFrameType;

export type { Family, Finish, Frame, Type };
