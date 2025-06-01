// Types
import type { UseFormReturn } from "react-hook-form";
import type { PaymentMethodSchema } from "../../../schemas/types/payment-method.schema.types";

type PaymentMethodFormProps = {
  form: UseFormReturn<PaymentMethodSchema>;
  handleSubmit: (values: PaymentMethodSchema) => void;
  label: string;
  loading: boolean;
};

export type { PaymentMethodFormProps };
