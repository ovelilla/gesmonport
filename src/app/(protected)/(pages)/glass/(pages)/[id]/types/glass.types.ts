import {
  Glass as PrismaGlass,
  GlassFamily,
  GlassFinish,
  GlassImage,
  GlassModel,
  GlassPrice as PrismaGlassPrice,
  GlassType,
} from "@prisma/client";

type Glass = PrismaGlass & {
  family: GlassFamily;
  finish: GlassFinish;
  images: GlassImage[];
  model: GlassModel;
  prices: GlassPrice[];
  type: GlassType;
};

type GlassPrice = PrismaGlassPrice;

export type { Glass, GlassPrice };
