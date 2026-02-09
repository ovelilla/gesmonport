import {
  GlassFinish as PrismaGlassFinish,
  GlassFinishImage,
} from "@/generated/prisma/client";

type Finish = PrismaGlassFinish & { images: GlassFinishImage[] };

export type { Finish };
