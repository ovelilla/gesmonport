import {
  GlassFinish as PrismaGlassFinish,
  GlassFinishImage,
} from "@/generated/prisma";

type Finish = PrismaGlassFinish & { images: GlassFinishImage[] };

export type { Finish };
