import type { Control } from "react-hook-form";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
import type {
  Hardware,
  HardwareType,
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";

type AutocompleteItem = {
  value: string;
  label: string;
};

type HardwareItemHookProps = {
  control: Control<BudgetSchema>;
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  index: number;
  parentIndex: number;
};

type HardwareItemHookReturn = {
  availableHardwareTypes: HardwareType[];
  currentTypeId?: string;
  hardwareItemsFiltered: AutocompleteItem[];
  searchValueHardware: string;
  setSearchValueHardware: (value: string) => void;
};

export type { HardwareItemHookProps, HardwareItemHookReturn };
