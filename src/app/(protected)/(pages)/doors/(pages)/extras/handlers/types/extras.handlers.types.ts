// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Extra } from "../../types/extras.types";
import type { ExtraSchema } from "../../schemas/types/extras.schema.types";

type ExtrasHandlersProps = {
  form: UseFormReturn<ExtraSchema>;
  newImages: File[];
  router: ReturnType<typeof useRouter>;
  selectedRow: Extra | null;
  selectedRows: Extra[];
  setData: Dispatch<SetStateAction<Extra[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Extra | null>>;
  setSelectedRows: Dispatch<SetStateAction<Extra[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type ExtrasHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Extra) => void;
  handleDeleteMultiple: (rows: Extra[]) => void;
  handleEdit: (row: Extra) => void;
  handleNavigate: (row: Extra) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ExtraSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<
  ExtrasHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

type DeleteHandlerProps = Pick<
  ExtrasHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Extra };

type DeleteMultipleHandlerProps = Pick<
  ExtrasHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Extra[];
};

type EditHandlerProps = Pick<
  ExtrasHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Extra;
};

type NavigateHandlerProps = Pick<ExtrasHandlersProps, "router"> & {
  row: Extra;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ExtrasHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ExtrasHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "newImages" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  ExtrasHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ExtrasHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
  | "values"
>;

type SubmitHandlerProps = Pick<
  ExtrasHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: ExtraSchema;
};

export type {
  ExtrasHandlersProps,
  ExtrasHandlersReturn,
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
