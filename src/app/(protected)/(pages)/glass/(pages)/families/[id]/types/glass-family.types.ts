import {
  GlassFamily as PrismaGlassFamily,
  GlassFamilyImage,
  GlassModel,
  GlassFamilyPrice as PrismaGlassFamilyPrice,
} from "@/generated/prisma";

type GlassFamily = PrismaGlassFamily & {
  images: GlassFamilyImage[];
  models: GlassModel[];
  prices: GlassFamilyPrice[];
};

type GlassFamilyPrice = PrismaGlassFamilyPrice;

export type { GlassFamily, GlassFamilyPrice };
