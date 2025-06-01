// Types
import type { UseFormReturn } from "react-hook-form";
import type { PositionSchema } from "../../../schemas/types/position.schema.types";

type PositionFormProps = {
  form: UseFormReturn<PositionSchema>;
  handleSubmit: (values: PositionSchema) => void;
  label: string;
  loading: boolean;
};

export type { PositionFormProps };
