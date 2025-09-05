// Types
import type {
  Architrave,
  Customer,
  Door,
  Frame,
  Hardware,
  PaymentMethod,
} from "../../../types/budgets.types";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../schemas/types/budgets.schemas.types";

type BudgetFormProps = {
  architraves: Architrave[];
  customers: Customer[];
  doors: Door[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  form: UseFormReturn<BudgetSchema>;
  frames: Frame[];
  handleSubmit: (values: BudgetSchema) => void;
  hardwares: Hardware[];
  label: string;
  loading: boolean;
  paymentMethods: PaymentMethod[];
};

export type { BudgetFormProps };
