// Enums
import { BudgetStatus } from "@prisma/client";
// Types
import type { BudgetSchema } from "../schemas/types/budgets.schemas.types";
import type { DefaultValues } from "react-hook-form";

const DEFAULT_ITEM = {
  architraveId: "",
  doorId: "",
  frameId: "",
  glassId: "",
  hardwareIds: [],
  height: 0,
  observations: "",
  quantity: 0,
  thickness: 0,
  width: 0,
};

const DEFAULT_FORM_VALUES = {
  customerId: "",
  date: "",
  discount: 0,
  items: [DEFAULT_ITEM],
  number: 0,
  observations: "",
  paymentMethodId: "",
  reference: "",
  sendAddress: "",
  showIBAN: false,
  status: BudgetStatus.pending,
  tax: 21,
  validity: "30 días",
} satisfies DefaultValues<BudgetSchema>;

export { DEFAULT_FORM_VALUES, DEFAULT_ITEM };
