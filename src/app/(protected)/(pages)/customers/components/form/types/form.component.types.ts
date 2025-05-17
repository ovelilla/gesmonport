// Types
import type { UseFormReturn } from "react-hook-form";
import type { CustomerSchema } from "../../../schemas/types/customer.schema.types";

type CustomerFormProps = {
  form: UseFormReturn<CustomerSchema>;
  handleSubmit: (values: CustomerSchema) => void;
  label: string;
  loading: boolean;
};

export type { CustomerFormProps };
