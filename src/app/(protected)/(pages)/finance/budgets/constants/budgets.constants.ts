// Enums
import { BudgetStatus } from "@/generated/prisma";
// Types
import type { BudgetSchema } from "../schemas/types/budgets.schemas.types";
import type { DefaultValues } from "react-hook-form";

const HARDWARE_DEFAULT_ITEM = {
  typeId: "",
  hardwareId: "",
  quantity: 0,
};

const DEFAULT_ITEM = {
  architraveTypeId: "",
  architraveFamilyId: "",
  architraveModelId: "",
  architraveFinishId: "",
  doorTypeId: "",
  doorFamilyId: "",
  doorModelId: "",
  doorFinishId: "",
  doorExtras: [] as string[],
  frameTypeId: "",
  frameFamilyId: "",
  frameModelId: "",
  frameFinishId: "",
  glassTypeId: "",
  glassFamilyId: "",
  glassModelId: "",
  glassFinishId: "",
  hardwareItems: [HARDWARE_DEFAULT_ITEM],
  height: 0,
  observations: "",
  quantity: 0,
  thickness: 0,
  width1: 0,
  width2: 0,
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

export { DEFAULT_FORM_VALUES, DEFAULT_ITEM, HARDWARE_DEFAULT_ITEM };
