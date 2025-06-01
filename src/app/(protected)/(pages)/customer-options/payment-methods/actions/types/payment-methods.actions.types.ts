// Types
import type { PaymentMethod } from "../../types/payment-methods.types";
import type { PaymentMethodSchema } from "../../schemas/types/payment-method.schema.types";

type CreatePaymentMethodProps = {
  values: PaymentMethodSchema;
};

type CreatePaymentMethodReturn = {
  client?: PaymentMethod;
  error?: string;
  success?: string;
};

type DeletePaymentMethodProps = {
  id: string;
};

type DeletePaymentMethodReturn = {
  success?: string;
  error?: string;
};

type DeleteMultiplePaymentMethodsProps = {
  ids: string[];
};

type DeleteMultiplePaymentMethodsReturn = {
  success?: string;
  error?: string;
};

type ReadPaymentMethodsReturn = PaymentMethod[];

type UpdatePaymentMethodProps = {
  id: string;
  values: PaymentMethodSchema;
};

type UpdatePaymentMethodReturn = {
  client?: PaymentMethod;
  error?: string;
  success?: string;
};

export type {
  CreatePaymentMethodProps,
  CreatePaymentMethodReturn,
  DeletePaymentMethodProps,
  DeletePaymentMethodReturn,
  DeleteMultiplePaymentMethodsProps,
  DeleteMultiplePaymentMethodsReturn,
  ReadPaymentMethodsReturn,
  UpdatePaymentMethodProps,
  UpdatePaymentMethodReturn,
};
