// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { PaymentMethod } from "../../types/payment-methods.types";
import type { PaymentMethodSchema } from "../../schemas/types/payment-method.schema.types";

type PaymentMethodsHandlersProps = {
  form: UseFormReturn<PaymentMethodSchema>;
  router: AppRouterInstance;
  selectedRow: PaymentMethod | null;
  selectedRows: PaymentMethod[];
  setData: Dispatch<SetStateAction<PaymentMethod[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<PaymentMethod | null>>;
  setSelectedRows: Dispatch<SetStateAction<PaymentMethod[]>>;
};

type PaymentMethodsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: PaymentMethod) => void;
  handleDeleteMultiple: (rows: PaymentMethod[]) => void;
  handleEdit: (row: PaymentMethod) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: PaymentMethodSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<PaymentMethodsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  PaymentMethodsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: PaymentMethod };

type DeleteMultipleHandlerProps = Pick<
  PaymentMethodsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: PaymentMethod[];
};

type EditHandlerProps = Pick<
  PaymentMethodsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: PaymentMethod;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  PaymentMethodsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  PaymentMethodsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  PaymentMethodsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  PaymentMethodsHandlersProps,
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
  PaymentMethodsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: PaymentMethodSchema;
};

export type {
  PaymentMethodsHandlersProps,
  PaymentMethodsHandlersReturn,
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
