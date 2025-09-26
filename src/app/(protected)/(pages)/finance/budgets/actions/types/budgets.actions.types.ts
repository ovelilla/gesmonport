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
} from "../../types/budgets.types";

type ReadArchitravesReturn = Architrave[];

type ReadBudgetsReturn = Budget[];

type ReadCustomersReturn = Customer[];

type ReadDoorFamiliesReturn = DoorFamily[];

type ReadDoorFinishesReturn = DoorFinish[];

type ReadDoorExtrasReturn = DoorExtra[];

type ReadDoorModelsReturn = DoorModel[];

type ReadDoorTypesReturn = DoorType[];

type ReadFramesReturn = Frame[];

type ReadHardwaresReturn = Hardware[];

type ReadHardwareTypesReturn = HardwareType[];

type ReadPaymentMethodsReturn = PaymentMethod[];

export type {
  ReadArchitravesReturn,
  ReadBudgetsReturn,
  ReadCustomersReturn,
  ReadDoorFamiliesReturn,
  ReadDoorFinishesReturn,
  ReadDoorExtrasReturn,
  ReadDoorModelsReturn,
  ReadDoorTypesReturn,
  ReadFramesReturn,
  ReadHardwaresReturn,
  ReadHardwareTypesReturn,
  ReadPaymentMethodsReturn,
};
