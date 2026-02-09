import {
  GlassFinish as PrismaGlassFinish,
  GlassFinishImage,
  GlassFinishPrice as PrismaGlassFinishPrice,
} from "@/generated/prisma";

type GlassFinish = PrismaGlassFinish & {
  images: GlassFinishImage[];
  prices: GlassFinishPrice[];
};

type GlassFinishPrice = PrismaGlassFinishPrice;

export type { GlassFinish, GlassFinishPrice };
