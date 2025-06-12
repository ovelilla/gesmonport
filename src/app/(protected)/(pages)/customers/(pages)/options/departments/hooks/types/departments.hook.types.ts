// Types
import type { UseFormReturn } from "react-hook-form";
import type { Department } from "../../types/departments.types";
import type { DepartmentSchema } from "../../schemas/types/department.schema.types";
import type { DepartmentsHandlersReturn } from "../../handlers/types/departments.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/departments.hook.utils.types";

type DepartmentsHookProps = {
  departments: Department[];
};

type DepartmentsHookReturn = Omit<
  DepartmentsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Department>;
  data: Department[];
  form: UseFormReturn<DepartmentSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Department>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Department | null;
  selectedRows: Department[];
};

export type { DepartmentsHookProps, DepartmentsHookReturn };
