import {
  Architrave as PrismaArchitrave,
  ArchitraveFamily as PrismaArchitraveFamily,
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveImage,
  ArchitraveType as PrismaArchitraveType,
} from "@prisma/client";

type Family = PrismaArchitraveFamily;

type Finish = PrismaArchitraveFinish;

type Architrave = PrismaArchitrave & {
  family: PrismaArchitraveFamily;
  finish: PrismaArchitraveFinish;
  images: ArchitraveImage[];
  type: PrismaArchitraveType;
};

type Type = PrismaArchitraveType;

export type { Family, Finish, Architrave, Type };
