import { Finish as PrismaFinish, FinishImage } from "@prisma/client";

type Finish = PrismaFinish & { images: FinishImage[] };

export type { Finish };
