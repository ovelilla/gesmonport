// Types
import type {
  Architrave,
  Budget,
  Customer,
  Door,
  Frame,
  Hardware,
  PaymentMethod,
} from "./budgets.types";

type BudgetsProps = {
  architraves: Architrave[];
  budgets: Budget[];
  customers: Customer[];
  doors: Door[];
  frames: Frame[];
  hardwares: Hardware[];
  paymentMethods: PaymentMethod[];
};

export type { BudgetsProps };
