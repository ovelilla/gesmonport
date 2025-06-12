// Types
import type { UseFormReturn } from "react-hook-form";
import type { DepartmentSchema } from "../../../schemas/types/department.schema.types";

type DepartmentFormProps = {
  form: UseFormReturn<DepartmentSchema>;
  handleSubmit: (values: DepartmentSchema) => void;
  label: string;
  loading: boolean;
};

export type { DepartmentFormProps };
