import {
  ArchitraveFamily as PrismaArchitraveFamily,
  ArchitraveFamilyImage,
  ArchitraveModel as PrismaArchitraveModel,
} from "@/generated/prisma/client";

type Family = PrismaArchitraveFamily & {
  images: ArchitraveFamilyImage[];
  models: PrismaArchitraveModel[];
};

type Model = PrismaArchitraveModel;

export type { Family, Model };
