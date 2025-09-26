// Types
import type {
  Architrave,
  Budget,
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
} from "./budgets.types";

type BudgetsProps = {
  architraves: Architrave[];
  budgets: Budget[];
  customers: Customer[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorExtras: DoorExtra[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  frames: Frame[];
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  paymentMethods: PaymentMethod[];
};

export type { BudgetsProps };
