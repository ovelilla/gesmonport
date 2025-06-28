// Types
import type {
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveFinishImage,
} from "@prisma/client";

type Finish = PrismaArchitraveFinish & { images: ArchitraveFinishImage[] };

export type { Finish };
