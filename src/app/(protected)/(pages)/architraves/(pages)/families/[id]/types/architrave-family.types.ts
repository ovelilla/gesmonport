import {
  ArchitraveFamily as PrismaArchitraveFamily,
  ArchitraveFamilyImage,
  ArchitraveModel,
  ArchitraveFamilyPrice as PrismaArchitraveFamilyPrice,
} from "@/generated/prisma/client";

type ArchitraveFamily = PrismaArchitraveFamily & {
  images: ArchitraveFamilyImage[];
  models: ArchitraveModel[];
  prices: ArchitraveFamilyPrice[];
};

type ArchitraveFamilyPrice = PrismaArchitraveFamilyPrice;

export type { ArchitraveFamily, ArchitraveFamilyPrice };
