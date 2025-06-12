// Types
import type {
  FrameType as PrismaFrameType,
  FrameTypeImage,
} from "@prisma/client";

type Type = PrismaFrameType & { images: FrameTypeImage[] };

export type { Type };
