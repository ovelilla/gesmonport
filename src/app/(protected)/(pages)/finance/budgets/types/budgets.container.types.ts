// Types
import type {
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveModel,
  ArchitraveType,
  Budget,
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
} from "./budgets.types";

type BudgetsProps = {
  architraveFamilies: ArchitraveFamily[];
  architraveFinishes: ArchitraveFinish[];
  architraveModels: ArchitraveModel[];
  architraveTypes: ArchitraveType[];
  budgets: Budget[];
  customers: Customer[];
  doorExtras: DoorExtra[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  frameFamilies: FrameFamily[];
  frameFinishes: FrameFinish[];
  frameModels: FrameModel[];
  frameTypes: FrameType[];
  glassFamilies: GlassFamily[];
  glassFinishes: GlassFinish[];
  glassModels: GlassModel[];
  glassTypes: GlassType[];
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  paymentMethods: PaymentMethod[];
};

export type { BudgetsProps };
