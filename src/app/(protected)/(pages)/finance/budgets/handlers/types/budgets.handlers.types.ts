// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Budget } from "../../types/budgets.types";
import type { BudgetSchema } from "../../schemas/types/budgets.schemas.types";

type BudgetsHandlersProps = {
  form: UseFormReturn<BudgetSchema>;
  router: ReturnType<typeof useRouter>;
  selectedRow: Budget | null;
  selectedRows: Budget[];
  setData: Dispatch<SetStateAction<Budget[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Budget | null>>;
  setSelectedRows: Dispatch<SetStateAction<Budget[]>>;
};

type BudgetsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Budget) => void;
  handleDeleteMultiple: (rows: Budget[]) => void;
  handleEdit: (row: Budget) => void;
  handleNavigate: (row: Budget) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: BudgetSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<BudgetsHandlersProps, "form" | "setOpenDialog">;

type DeleteHandlerProps = Pick<
  BudgetsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Budget };

type DeleteMultipleHandlerProps = Pick<
  BudgetsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Budget[];
};

type EditHandlerProps = Pick<
  BudgetsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Budget;
};

type NavigateHandlerProps = Pick<BudgetsHandlersProps, "router"> & {
  row: Budget;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  BudgetsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  BudgetsHandlersProps,
  "form" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  BudgetsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  BudgetsHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  BudgetsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: BudgetSchema;
};

export type {
  BudgetsHandlersProps,
  BudgetsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  NavigateHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
