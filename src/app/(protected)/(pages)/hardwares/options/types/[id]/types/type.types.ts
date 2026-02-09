// Types
import type {
  HardwareType as PrismaHardwareType,
  HardwareTypeImage,
} from "@/generated/prisma";

type Type = PrismaHardwareType & { images: HardwareTypeImage[] };

export type { Type };
