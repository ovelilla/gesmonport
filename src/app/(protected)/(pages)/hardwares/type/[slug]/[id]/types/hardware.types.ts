// Types
import type {
  DoorType,
  Hardware as PrismaHardware,
  HardwareFinish,
  HardwareImage,
  HardwareType,
} from "@/generated/prisma/client";

type Hardware = PrismaHardware & {
  doorTypes: DoorType[];
  finish: HardwareFinish | null;
  images: HardwareImage[];
  type: HardwareType;
};

export type { Hardware };
