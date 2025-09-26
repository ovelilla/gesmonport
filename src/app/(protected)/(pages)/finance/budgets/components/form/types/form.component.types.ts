// Types
import type {
  Architrave,
  Customer,
  DoorFamily,
  DoorFinish,
  DoorExtra,
  DoorModel,
  DoorType,
  Frame,
  Hardware,
  HardwareType,
  PaymentMethod,
} from "../../../types/budgets.types";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../schemas/types/budgets.schemas.types";

type BudgetFormProps = {
  architraves: Architrave[];
  customers: Customer[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorExtras: DoorExtra[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  form: UseFormReturn<BudgetSchema>;
  frames: Frame[];
  handleSubmit: (values: BudgetSchema) => void;
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  label: string;
  loading: boolean;
  paymentMethods: PaymentMethod[];
};

export type { BudgetFormProps };
