// Types
import type { Dispatch, SetStateAction } from "react";
import type { Customer } from "../../../../types/budgets.types";
import type { UseFormReturn } from "react-hook-form";
import type { BudgetSchema } from "../../../../schemas/types/budgets.schemas.types";

type BudgetFormHookProps = {
  customers: Customer[];
  form: UseFormReturn<BudgetSchema>;
};

type Item = { value: string; label: string };

type BudgetFormHookReturn = {
  customerItems: Item[];
  isCalendarOpen: boolean;
  searchValueCustomer: string;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
  setSearchValueCustomer: Dispatch<SetStateAction<string>>;
};

export type { BudgetFormHookProps, BudgetFormHookReturn };
