// Types
import type {
  Hardware,
  HardwareType,
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
import type { Control, UseFieldArrayReturn } from "react-hook-form";

type HardwareItemProps = {
  control: Control<BudgetSchema>;
  hardwareFieldArray: UseFieldArrayReturn<
    BudgetSchema,
    `items.${number}.hardwareItems`
  >;
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  index: number;
  parentIndex: number;
};

export type { HardwareItemProps };
