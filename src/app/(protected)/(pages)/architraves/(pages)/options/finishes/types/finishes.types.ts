import {
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveFinishImage,
} from "@prisma/client";

type Finish = PrismaArchitraveFinish & { images: ArchitraveFinishImage[] };

export type { Finish };
