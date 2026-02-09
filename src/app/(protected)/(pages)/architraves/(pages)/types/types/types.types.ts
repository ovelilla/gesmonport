import {
  ArchitraveFamily as PrismaArchitraveFamily,
  ArchitraveType as PrismaArchitraveType,
  ArchitraveTypeImage,
} from "@/generated/prisma";

type Family = PrismaArchitraveFamily;

type Type = PrismaArchitraveType & {
  families: PrismaArchitraveFamily[];
  images: ArchitraveTypeImage[];
};

export type { Family, Type };
