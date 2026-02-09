// Types
import type {
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveModel,
  ArchitraveType,
  Customer,
  DoorExtra,
  DoorFamily,
  DoorFinish,
  DoorModel,
  DoorType,
  FrameFamily,
  FrameFinish,
  FrameModel,
  FrameType,
  GlassFamily,
  GlassFinish,
  GlassModel,
  GlassType,
  Hardware,
  HardwareType,
  PaymentMethod,
} from "../../../types/budgets.types";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../schemas/types/budgets.schemas.types";

type BudgetFormProps = {
  architraveFamilies: ArchitraveFamily[];
  architraveFinishes: ArchitraveFinish[];
  architraveModels: ArchitraveModel[];
  architraveTypes: ArchitraveType[];
  customers: Customer[];
  doorExtras: DoorExtra[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  form: UseFormReturn<BudgetSchema>;
  frameFamilies: FrameFamily[];
  frameFinishes: FrameFinish[];
  frameModels: FrameModel[];
  frameTypes: FrameType[];
  glassFamilies: GlassFamily[];
  glassFinishes: GlassFinish[];
  glassModels: GlassModel[];
  glassTypes: GlassType[];
  handleSubmit: (values: BudgetSchema) => void;
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  label: string;
  loading: boolean;
  paymentMethods: PaymentMethod[];
};

export type { BudgetFormProps };
