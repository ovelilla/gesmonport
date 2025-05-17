// Types
import type { Customer } from "../../types/customers.types";
import type { CustomerSchema } from "../../schemas/types/customer.schema.types";

type CreateCustomerProps = {
  values: CustomerSchema;
};

type CreateCustomerReturn = {
  client?: Customer;
  error?: string;
  success?: string;
};

type DeleteCustomerProps = {
  id: string;
};

type DeleteCustomerReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleCustomersProps = {
  ids: string[];
};

type DeleteMultipleCustomersReturn = {
  success?: string;
  error?: string;
};

type ReadCustomersReturn = Customer[];

type UpdateCustomerProps = {
  id: string;
  values: CustomerSchema;
};

type UpdateCustomerReturn = {
  client?: Customer;
  error?: string;
  success?: string;
};

export type {
  CreateCustomerProps,
  CreateCustomerReturn,
  DeleteCustomerProps,
  DeleteCustomerReturn,
  DeleteMultipleCustomersProps,
  DeleteMultipleCustomersReturn,
  ReadCustomersReturn,
  UpdateCustomerProps,
  UpdateCustomerReturn,
};
