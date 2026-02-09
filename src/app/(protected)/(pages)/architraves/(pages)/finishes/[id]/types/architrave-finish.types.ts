import {
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveFinishImage,
  ArchitraveFinishPrice as PrismaArchitraveFinishPrice,
} from "@/generated/prisma";

type ArchitraveFinish = PrismaArchitraveFinish & {
  images: ArchitraveFinishImage[];
  prices: ArchitraveFinishPrice[];
};

type ArchitraveFinishPrice = PrismaArchitraveFinishPrice;

export type { ArchitraveFinish, ArchitraveFinishPrice };
