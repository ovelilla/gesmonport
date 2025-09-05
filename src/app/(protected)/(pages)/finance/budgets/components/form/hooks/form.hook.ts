"use client";
// Vendors
import { useState } from "react";
// Types
import type {
  BudgetFormHookProps,
  BudgetFormHookReturn,
} from "./types/form.hook.types";

const BudgetFormHook = ({
  customers,
  form,
}: BudgetFormHookProps): BudgetFormHookReturn => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [searchValueCustomer, setSearchValueCustomer] = useState<string>("");

  const customerSearch = form.watch("customerId");

  const customerItems = customers
    .filter(
      (client) =>
        client.id === customerSearch ||
        [client.name].some((field) =>
          field?.toLowerCase().includes(customerSearch.toLowerCase()),
        ),
    )
    .slice(0, 10)
    .map((client) => ({
      value: client.id,
      label: client.name,
    }));

  return {
    customerItems,
    isCalendarOpen,
    searchValueCustomer,
    setIsCalendarOpen,
    setSearchValueCustomer,
  };
};

export { BudgetFormHook };
