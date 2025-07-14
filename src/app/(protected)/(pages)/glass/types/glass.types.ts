import {
  Glass as PrismaGlass,
  GlassFamily as PrismaGlassFamily,
  GlassFinish as PrismaGlassFinish,
  GlassImage,
  GlassModel as PrismaGlassModel,
  GlassType as PrismaGlassType,
} from "@prisma/client";

type Family = PrismaGlassFamily;

type Finish = PrismaGlassFinish;

type Glass = PrismaGlass & {
  family: PrismaGlassFamily;
  finish: PrismaGlassFinish;
  images: GlassImage[];
  model: PrismaGlassModel;
  type: PrismaGlassType;
};

type Model = PrismaGlassModel;

type Type = PrismaGlassType;

export type { Family, Finish, Glass, Model, Type };
