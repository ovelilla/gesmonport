import {
  GlassFinish,
  GlassModel as PrismaGlassModel,
  GlassModelImage,
  GlassModelPrice as PrismaGlassModelPrice,
} from "@/generated/prisma/client";

type GlassModel = PrismaGlassModel & {
  finishes: GlassFinish[];
  images: GlassModelImage[];
  prices: GlassModelPrice[];
};

type GlassModelPrice = PrismaGlassModelPrice;

export type { GlassModel, GlassModelPrice };
