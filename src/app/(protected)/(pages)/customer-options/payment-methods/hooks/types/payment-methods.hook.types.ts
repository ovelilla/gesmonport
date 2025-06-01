// Types
import type { UseFormReturn } from "react-hook-form";
import type { PaymentMethod } from "../../types/payment-methods.types";
import type { PaymentMethodSchema } from "../../schemas/types/payment-method.schema.types";
import type { PaymentMethodsHandlersReturn } from "../../handlers/types/payment-methods.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/payment-methods.hook.utils.types";

type PaymentMethodsHookProps = {
  paymentMethods: PaymentMethod[];
};

type PaymentMethodsHookReturn = Omit<
  PaymentMethodsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<PaymentMethod>;
  data: PaymentMethod[];
  form: UseFormReturn<PaymentMethodSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<PaymentMethod>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: PaymentMethod | null;
  selectedRows: PaymentMethod[];
};

export type { PaymentMethodsHookProps, PaymentMethodsHookReturn };
