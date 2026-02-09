// Types
import type {
  HardwareType as PrismaHardwareType,
  HardwareTypeImage,
} from "@/generated/prisma/client";

type Type = PrismaHardwareType & { images: HardwareTypeImage[] };

export type { Type };
