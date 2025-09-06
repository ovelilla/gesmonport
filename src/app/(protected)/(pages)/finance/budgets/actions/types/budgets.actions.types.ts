// Types
import type {
  Architrave,
  Budget,
  Customer,
  DoorFamily,
  DoorFinish,
  DoorModel,
  DoorType,
  Frame,
  Hardware,
  PaymentMethod,
} from "../../types/budgets.types";

type ReadArchitravesReturn = Architrave[];

type ReadBudgetsReturn = Budget[];

type ReadCustomersReturn = Customer[];

type ReadDoorFamiliesReturn = DoorFamily[];

type ReadDoorFinishesReturn = DoorFinish[];

type ReadDoorModelsReturn = DoorModel[];

type ReadDoorTypesReturn = DoorType[];

type ReadFramesReturn = Frame[];

type ReadHardwaresReturn = Hardware[];

type ReadPaymentMethodsReturn = PaymentMethod[];

export type {
  ReadArchitravesReturn,
  ReadBudgetsReturn,
  ReadCustomersReturn,
  ReadDoorFamiliesReturn,
  ReadDoorFinishesReturn,
  ReadDoorModelsReturn,
  ReadDoorTypesReturn,
  ReadFramesReturn,
  ReadHardwaresReturn,
  ReadPaymentMethodsReturn,
};
