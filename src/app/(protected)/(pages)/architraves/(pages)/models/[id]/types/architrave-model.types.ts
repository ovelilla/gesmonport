import {
  ArchitraveFinish,
  ArchitraveModel as PrismaArchitraveModel,
  ArchitraveModelImage,
  ArchitraveModelPrice as PrismaArchitraveModelPrice,
} from "@/generated/prisma";

type ArchitraveModel = PrismaArchitraveModel & {
  finishes: ArchitraveFinish[];
  images: ArchitraveModelImage[];
  prices: ArchitraveModelPrice[];
};

type ArchitraveModelPrice = PrismaArchitraveModelPrice;

export type { ArchitraveModel, ArchitraveModelPrice };
