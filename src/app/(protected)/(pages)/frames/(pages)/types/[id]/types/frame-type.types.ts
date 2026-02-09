import {
  FrameFamily,
  FrameType as PrismaFrameType,
  FrameTypeImage,
  FrameTypePrice as PrismaFrameTypePrice,
} from "@/generated/prisma";

type FrameType = PrismaFrameType & {
  families: FrameFamily[];
  images: FrameTypeImage[];
  prices: FrameTypePrice[];
};

type FrameTypePrice = PrismaFrameTypePrice;

export type { FrameType, FrameTypePrice };
