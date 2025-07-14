// Types
import type {
  GlassType as PrismaGlassType,
  GlassTypeImage,
} from "@prisma/client";

type Type = PrismaGlassType & { images: GlassTypeImage[] };

export type { Type };
