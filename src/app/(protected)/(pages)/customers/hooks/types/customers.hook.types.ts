// Types
import type { UseFormReturn } from "react-hook-form";
import type { Customer } from "../../types/customers.types";
import type { CustomerSchema } from "../../schemas/types/customer.schema.types";
import type { CustomersHandlersReturn } from "../../handlers/types/customers.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/customers.hook.utils.types";

type CustomersHookProps = {
  customers: Customer[];
};

type CustomersHookReturn = Omit<
  CustomersHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Customer>;
  data: Customer[];
  form: UseFormReturn<CustomerSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Customer>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Customer | null;
  selectedRows: Customer[];
};

export type { CustomersHookProps, CustomersHookReturn };
