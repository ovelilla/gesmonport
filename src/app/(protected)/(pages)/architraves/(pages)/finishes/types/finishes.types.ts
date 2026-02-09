import {
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveFinishImage,
} from "@/generated/prisma";

type Finish = PrismaArchitraveFinish & { images: ArchitraveFinishImage[] };

export type { Finish };
