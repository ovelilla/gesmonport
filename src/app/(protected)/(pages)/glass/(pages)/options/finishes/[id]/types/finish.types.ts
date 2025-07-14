// Types
import type {
  GlassFinish as PrismaGlassFinish,
  GlassFinishImage,
} from "@prisma/client";

type Finish = PrismaGlassFinish & { images: GlassFinishImage[] };

export type { Finish };
