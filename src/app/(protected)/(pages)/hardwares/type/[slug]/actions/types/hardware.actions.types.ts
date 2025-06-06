// Types
import type { HardwareSchema } from "../../schemas/types/hardware.schema.types";
import {
  DoorType,
  Hardware,
  HardwareFinish,
  HardwareType,
} from "../../types/hardware.types";

type CreateHardwareProps = {
  newImages: File[];
  slug: string;
  values: HardwareSchema;
};

type CreateHardwareReturn = {
  hardware?: Hardware;
  error?: string;
  success?: string;
};

type DeleteHardwareProps = {
  id: string;
};

type DeleteHardwareReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleHardwareProps = {
  ids: string[];
};

type DeleteMultipleHardwareReturn = {
  success?: string;
  error?: string;
};

type ReadDoorTypesReturn = DoorType[];

type ReadHardwaresProps = {
  slug: string;
};

type ReadHardwaresReturn = Hardware[];

type ReadHardwareFinishesReturn = HardwareFinish[];

type ReadHardwareTypeProps = {
  slug: string;
};

type ReadHardwareTypeReturn = HardwareType | null;

type UpdateHardwareProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: HardwareSchema;
};

type UpdateHardwareReturn = {
  hardware?: Hardware;
  error?: string;
  success?: string;
};

export type {
  CreateHardwareProps,
  CreateHardwareReturn,
  DeleteHardwareProps,
  DeleteHardwareReturn,
  DeleteMultipleHardwareProps,
  DeleteMultipleHardwareReturn,
  ReadDoorTypesReturn,
  ReadHardwaresProps,
  ReadHardwaresReturn,
  ReadHardwareFinishesReturn,
  ReadHardwareTypeProps,
  ReadHardwareTypeReturn,
  UpdateHardwareProps,
  UpdateHardwareReturn,
};
