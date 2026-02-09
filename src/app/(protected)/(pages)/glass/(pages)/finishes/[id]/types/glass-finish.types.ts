import {
  GlassFinish as PrismaGlassFinish,
  GlassFinishImage,
  GlassFinishPrice as PrismaGlassFinishPrice,
} from "@/generated/prisma/client";

type GlassFinish = PrismaGlassFinish & {
  images: GlassFinishImage[];
  prices: GlassFinishPrice[];
};

type GlassFinishPrice = PrismaGlassFinishPrice;

export type { GlassFinish, GlassFinishPrice };
