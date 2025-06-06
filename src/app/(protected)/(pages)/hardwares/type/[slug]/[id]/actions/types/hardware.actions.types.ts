// Types
import type { Hardware } from "../../types/hardware.types";

type ReadHardwareProps = {
  id: string;
};

type ReadHardwareReturn = Hardware | null;

export type { ReadHardwareProps, ReadHardwareReturn };
