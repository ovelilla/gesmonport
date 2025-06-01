import type { Hardware, HardwareFinish, HardwareType } from "./hardware.types";

type HardwareProps = {
  hardwares: Hardware[];
  hardwaresFinishes: HardwareFinish[];
  hardwareType: HardwareType;
};

export type { HardwareProps };
