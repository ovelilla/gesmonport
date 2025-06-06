import type {
  DoorType,
  Hardware,
  HardwareFinish,
  HardwareType,
} from "./hardware.types";

type HardwareProps = {
  doorTypes: DoorType[];
  hardwares: Hardware[];
  hardwaresFinishes: HardwareFinish[];
  hardwareType: HardwareType;
  slug: string;
};

export type { HardwareProps };
