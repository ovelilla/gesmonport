import type {
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveModel as PrismaArchitraveModel,
  ArchitraveModelImage,
} from "@/generated/prisma";

type Finish = PrismaArchitraveFinish;

type Model = PrismaArchitraveModel & {
  finishes: PrismaArchitraveFinish[];
  images: ArchitraveModelImage[];
};

export type { Model, Finish };
