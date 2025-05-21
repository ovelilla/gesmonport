// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Type } from "../../types/types.types";
import type { TypeSchema } from "../../schemas/types/types.schema.types";

type TypesHandlersProps = {
  form: UseFormReturn<TypeSchema>;
  router: AppRouterInstance;
  selectedRow: Type | null;
  selectedRows: Type[];
  setData: Dispatch<SetStateAction<Type[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Type | null>>;
  setSelectedRows: Dispatch<SetStateAction<Type[]>>;
};

type TypesHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Type) => void;
  handleDeleteMultiple: (rows: Type[]) => void;
  handleEdit: (row: Type) => void;
  handleNavigate: (row: Type) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: TypeSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<TypesHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  TypesHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Type };

type DeleteMultipleHandlerProps = Pick<
  TypesHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Type[];
};

type EditHandlerProps = Pick<
  TypesHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Type;
};

type NavigateHandlerProps = Pick<TypesHandlersProps, "router"> & {
  row: Type;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  TypesHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  TypesHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  TypesHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  TypesHandlersProps,
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
  TypesHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: TypeSchema;
};

export type {
  TypesHandlersProps,
  TypesHandlersReturn,
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
