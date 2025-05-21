// Types
import type { UseFormReturn } from "react-hook-form";
import type { Type } from "../../types/types.types";
import type { TypeSchema } from "../../schemas/types/types.schema.types";
import type { TypesHandlersReturn } from "../../handlers/types/types.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/types.hook.utils.types";

type TypesHookProps = {
  types: Type[];
};

type TypesHookReturn = Omit<
  TypesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Type>;
  data: Type[];
  form: UseFormReturn<TypeSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Type>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Type | null;
  selectedRows: Type[];
};

export type { TypesHookProps, TypesHookReturn };
