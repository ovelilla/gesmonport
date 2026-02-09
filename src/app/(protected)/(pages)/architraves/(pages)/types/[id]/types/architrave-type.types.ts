import {
  ArchitraveFamily,
  ArchitraveType as PrismaArchitraveType,
  ArchitraveTypeImage,
  ArchitraveTypePrice as PrismaArchitraveTypePrice,
} from "@/generated/prisma";

type ArchitraveType = PrismaArchitraveType & {
  families: ArchitraveFamily[];
  images: ArchitraveTypeImage[];
  prices: ArchitraveTypePrice[];
};

type ArchitraveTypePrice = PrismaArchitraveTypePrice;

export type { ArchitraveType, ArchitraveTypePrice };
