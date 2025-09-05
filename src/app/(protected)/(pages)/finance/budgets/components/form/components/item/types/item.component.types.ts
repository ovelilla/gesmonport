// Types
import type {
  Architrave,
  Door,
  Frame,
  Hardware,
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
import type { UseFieldArrayReturn } from "react-hook-form";

type ItemProps = {
  architraves: Architrave[];
  doors: Door[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frames: Frame[];
  hardwares: Hardware[];
  index: number;
};

export type { ItemProps };
