// Types
import type { UseFormReturn } from "react-hook-form";
import type { Position } from "../../types/positions.types";
import type { PositionSchema } from "../../schemas/types/position.schema.types";
import type { PositionsHandlersReturn } from "../../handlers/types/positions.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/positions.hook.utils.types";

type PositionsHookProps = {
  positions: Position[];
};

type PositionsHookReturn = Omit<
  PositionsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Position>;
  data: Position[];
  form: UseFormReturn<PositionSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Position>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Position | null;
  selectedRows: Position[];
};

export type { PositionsHookProps, PositionsHookReturn };
