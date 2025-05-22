// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Department } from "../../types/departments.types";
import type { DepartmentSchema } from "../../schemas/types/department.schema.types";

type DepartmentsHandlersProps = {
  form: UseFormReturn<DepartmentSchema>;
  router: AppRouterInstance;
  selectedRow: Department | null;
  selectedRows: Department[];
  setData: Dispatch<SetStateAction<Department[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Department | null>>;
  setSelectedRows: Dispatch<SetStateAction<Department[]>>;
};

type DepartmentsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Department) => void;
  handleDeleteMultiple: (rows: Department[]) => void;
  handleEdit: (row: Department) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: DepartmentSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<DepartmentsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  DepartmentsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Department };

type DeleteMultipleHandlerProps = Pick<
  DepartmentsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Department[];
};

type EditHandlerProps = Pick<
  DepartmentsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Department;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  DepartmentsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  DepartmentsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  DepartmentsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  DepartmentsHandlersProps,
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
  DepartmentsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: DepartmentSchema;
};

export type {
  DepartmentsHandlersProps,
  DepartmentsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
