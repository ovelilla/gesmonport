import type {
  GlassFinish as PrismaGlassFinish,
  GlassModel as PrismaGlassModel,
  GlassModelImage,
} from "@/generated/prisma";

type Finish = PrismaGlassFinish;

type Model = PrismaGlassModel & {
  finishes: PrismaGlassFinish[];
  images: GlassModelImage[];
};

export type { Model, Finish };
