// Types
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { Budget } from "../../types/budgets.types";
import type { BudgetSchema } from "../../schemas/types/budgets.schemas.types";
import type { BudgetsHandlersReturn } from "../../handlers/types/budgets.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/budgets.hook.utils.types";

type BudgetsHookProps = {
  budgets: Budget[];
};

type BudgetsHookReturn = Omit<
  BudgetsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Budget>;
  data: Budget[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  form: UseFormReturn<BudgetSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Budget>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Budget | null;
  selectedRows: Budget[];
};

export type { BudgetsHookProps, BudgetsHookReturn };
