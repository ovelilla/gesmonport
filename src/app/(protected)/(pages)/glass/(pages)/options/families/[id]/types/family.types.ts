// Types
import type {
  GlassFamily as PrismaGlassFamily,
  GlassFamilyImage,
} from "@prisma/client";

type Family = PrismaGlassFamily & { images: GlassFamilyImage[] };

export type { Family };
