// Types
import type { UseFormReturn } from "react-hook-form";
import type { TypeSchema } from "../../../schemas/types/types.schema.types";

type TypeFormProps = {
  form: UseFormReturn<TypeSchema>;
  handleSubmit: (values: TypeSchema) => void;
  label: string;
  loading: boolean;
};

export type { TypeFormProps };
