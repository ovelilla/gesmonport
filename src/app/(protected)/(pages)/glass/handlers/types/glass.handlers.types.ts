// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Glass } from "../../types/glass.types";
import type { GlassSchema } from "../../schemas/types/glass.schema.types";

type GlassHandlersProps = {
  form: UseFormReturn<GlassSchema>;
  newImages: File[];
  router: ReturnType<typeof useRouter>;
  selectedRow: Glass | null;
  selectedRows: Glass[];
  setData: Dispatch<SetStateAction<Glass[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Glass | null>>;
  setSelectedRows: Dispatch<SetStateAction<Glass[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type GlassHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Glass) => void;
  handleDeleteMultiple: (rows: Glass[]) => void;
  handleEdit: (row: Glass) => void;
  handleNavigate: (row: Glass) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: GlassSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<
  GlassHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

type DeleteHandlerProps = Pick<
  GlassHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Glass };

type DeleteMultipleHandlerProps = Pick<
  GlassHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Glass[];
};

type EditHandlerProps = Pick<
  GlassHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Glass;
};

type NavigateHandlerProps = Pick<GlassHandlersProps, "router"> & {
  row: Glass;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  GlassHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  GlassHandlersProps,
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
  GlassHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  GlassHandlersProps,
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
  GlassHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: GlassSchema;
};

export type {
  GlassHandlersProps,
  GlassHandlersReturn,
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
