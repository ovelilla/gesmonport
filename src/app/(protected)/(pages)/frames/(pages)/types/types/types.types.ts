import {
  FrameFamily as PrismaFrameFamily,
  FrameType as PrismaFrameType,
  FrameTypeImage,
} from "@/generated/prisma";

type Family = PrismaFrameFamily;

type Type = PrismaFrameType & {
  families: PrismaFrameFamily[];
  images: FrameTypeImage[];
};

export type { Family, Type };
