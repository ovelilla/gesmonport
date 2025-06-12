import {
  FrameFamily as PrismaFrameFamily,
  FrameFamilyImage,
} from "@prisma/client";

type Family = PrismaFrameFamily & { images: FrameFamilyImage[] };

export type { Family };
