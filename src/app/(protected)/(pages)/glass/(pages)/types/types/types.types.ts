import {
  GlassFamily as PrismaGlassFamily,
  GlassType as PrismaGlassType,
  GlassTypeImage,
} from "@/generated/prisma/client";

type Family = PrismaGlassFamily;

type Type = PrismaGlassType & {
  families: PrismaGlassFamily[];
  images: GlassTypeImage[];
};

export type { Family, Type };
