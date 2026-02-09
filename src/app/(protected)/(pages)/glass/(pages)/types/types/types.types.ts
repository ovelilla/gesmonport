import {
  GlassFamily as PrismaGlassFamily,
  GlassType as PrismaGlassType,
  GlassTypeImage,
} from "@/generated/prisma";

type Family = PrismaGlassFamily;

type Type = PrismaGlassType & {
  families: PrismaGlassFamily[];
  images: GlassTypeImage[];
};

export type { Family, Type };
