// Types
import type {
  Architrave,
  DoorFamily,
  DoorFinish,
  DoorExtra,
  DoorModel,
  DoorType,
  Frame,
  Hardware,
  HardwareType,
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
import type { UseFieldArrayReturn } from "react-hook-form";

type ItemProps = {
  architraves: Architrave[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorExtras: DoorExtra[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frames: Frame[];
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  index: number;
};

export type { ItemProps };
