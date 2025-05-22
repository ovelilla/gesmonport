// Types
import type { PaymentMethod } from "../../../types/customers.types";
import type { UseFormReturn } from "react-hook-form";
import type { CustomerSchema } from "../../../schemas/types/customer.schema.types";

type CustomerFormProps = {
  form: UseFormReturn<CustomerSchema>;
  handleSubmit: (values: CustomerSchema) => void;
  label: string;
  loading: boolean;
  paymentMethods: PaymentMethod[];
};

export type { CustomerFormProps };
