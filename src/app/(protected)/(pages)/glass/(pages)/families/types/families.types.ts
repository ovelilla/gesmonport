import {
  GlassFamily as PrismaGlassFamily,
  GlassFamilyImage,
  GlassModel as PrismaGlassModel,
} from "@/generated/prisma/client";

type Family = PrismaGlassFamily & {
  images: GlassFamilyImage[];
  models: PrismaGlassModel[];
};

type Model = PrismaGlassModel;

export type { Family, Model };
