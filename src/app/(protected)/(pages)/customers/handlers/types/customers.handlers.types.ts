// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Customer } from "../../types/customers.types";
import type { CustomerSchema } from "../../schemas/types/customer.schema.types";

type CustomersHandlersProps = {
  form: UseFormReturn<CustomerSchema>;
  router: ReturnType<typeof useRouter>;
  selectedRow: Customer | null;
  selectedRows: Customer[];
  setData: Dispatch<SetStateAction<Customer[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Customer | null>>;
  setSelectedRows: Dispatch<SetStateAction<Customer[]>>;
};

type CustomersHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Customer) => void;
  handleDeleteMultiple: (rows: Customer[]) => void;
  handleEdit: (row: Customer) => void;
  handleNavigate: (row: Customer) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: CustomerSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<CustomersHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  CustomersHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Customer };

type DeleteMultipleHandlerProps = Pick<
  CustomersHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Customer[];
};

type EditHandlerProps = Pick<
  CustomersHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Customer;
};

type NavigateHandlerProps = Pick<CustomersHandlersProps, "router"> & {
  row: Customer;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  CustomersHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  CustomersHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  CustomersHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  CustomersHandlersProps,
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
  CustomersHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: CustomerSchema;
};

export type {
  CustomersHandlersProps,
  CustomersHandlersReturn,
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
