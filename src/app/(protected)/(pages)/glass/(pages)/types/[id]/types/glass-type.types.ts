import {
  GlassFamily,
  GlassType as PrismaGlassType,
  GlassTypeImage,
  GlassTypePrice as PrismaGlassTypePrice,
} from "@/generated/prisma/client";

type GlassType = PrismaGlassType & {
  families: GlassFamily[];
  images: GlassTypeImage[];
  prices: GlassTypePrice[];
};

type GlassTypePrice = PrismaGlassTypePrice;

export type { GlassType, GlassTypePrice };
