// Types
import type {
  DoorType as PrismaDoorType,
  Hardware as PrismaHardware,
  HardwareFinish as PrismaHardwareFinish,
  HardwareImage,
  HardwareType as PrismaHardwareType,
} from "@prisma/client";

type DoorType = PrismaDoorType;

type Hardware = PrismaHardware & {
  doorTypes: DoorType[];
  finish: HardwareFinish | null;
  images: HardwareImage[];
  type: HardwareType;
};

type HardwareFinish = PrismaHardwareFinish;

type HardwareType = PrismaHardwareType;

export type { DoorType, Hardware, HardwareFinish, HardwareType };
