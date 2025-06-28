import {
  Architrave as PrismaArchitrave,
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveImage,
  ArchitravePrice as PrismaArchitravePrice,
  ArchitraveType,
} from "@prisma/client";

type Architrave = PrismaArchitrave & {
  family: ArchitraveFamily;
  finish: ArchitraveFinish;
  images: ArchitraveImage[];
  prices: ArchitravePrice[];
  type: ArchitraveType;
};

type ArchitravePrice = PrismaArchitravePrice;

export type { Architrave, ArchitravePrice };
