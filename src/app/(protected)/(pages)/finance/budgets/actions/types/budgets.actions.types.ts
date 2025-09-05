// Types
import type {
  Architrave,
  Budget,
  Customer,
  Door,
  Frame,
  Hardware,
  PaymentMethod,
} from "../../types/budgets.types";

type ReadArchitravesReturn = Architrave[];

type ReadBudgetsReturn = Budget[];

type ReadCustomersReturn = Customer[];

type ReadDoorsReturn = Door[];

type ReadFramesReturn = Frame[];

type ReadHardwaresReturn = Hardware[];

type ReadPaymentMethodsReturn = PaymentMethod[];

export type {
  ReadBudgetsReturn,
  ReadCustomersReturn,
  ReadDoorsReturn,
  ReadFramesReturn,
  ReadArchitravesReturn,
  ReadHardwaresReturn,
  ReadPaymentMethodsReturn,
};
