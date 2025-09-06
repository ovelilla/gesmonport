// Types
import type {
  Architrave,
  DoorFamily,
  DoorFinish,
  DoorModel,
  DoorType,
  Frame,
  Hardware,
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
import type { UseFieldArrayReturn } from "react-hook-form";

type ItemProps = {
  architraves: Architrave[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frames: Frame[];
  hardwares: Hardware[];
  index: number;
};

export type { ItemProps };
