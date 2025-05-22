// Types
import type { Customer, PaymentMethod } from "./customers.types";

type CustomersProps = {
  customers: Customer[];
  paymentMethods: PaymentMethod[];
};

export type { CustomersProps };
