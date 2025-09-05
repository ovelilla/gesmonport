"use client";
// Vendors
import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/budgets.constants";
// Handlers
import { BudgetsHandlers } from "../handlers/budgets.handlers";
// Schemas
import { budgetSchema } from "../schemas/budgets.schemas";
// Types
import type { Budget } from "../types/budgets.types";
import type { BudgetSchema } from "../schemas/types/budgets.schemas.types";
import type {
  BudgetsHookProps,
  BudgetsHookReturn,
} from "./types/budgets.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/budgets.hook.utils";

const BudgetsHook = ({
  budgets,
}: BudgetsHookProps): BudgetsHookReturn => {
  const [data, setData] = useState<Budget[]>(budgets);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Budget | null>(null);
  const [selectedRows, setSelectedRows] = useState<Budget[]>([]);

  const form = useForm<BudgetSchema>({
    resolver: zodResolver(budgetSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "items",
  });

  const router = useRouter();

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleNavigate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = BudgetsHandlers({
    form,
    router,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleEdit,
    handleNavigate,
  });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    fieldArray,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
  };
};

export { BudgetsHook };
