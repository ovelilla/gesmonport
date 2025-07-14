import {
  GlassModel as PrismaGlassModel,
  GlassModelImage,
} from "@prisma/client";

type Model = PrismaGlassModel & { images: GlassModelImage[] };

export type { Model };
