import {
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveFinishImage,
} from "@/generated/prisma/client";

type Finish = PrismaArchitraveFinish & { images: ArchitraveFinishImage[] };

export type { Finish };
