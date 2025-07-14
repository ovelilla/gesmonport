// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Model } from "../../types/models.types";
import type { ModelSchema } from "../../schemas/types/model.schema.types";

type ModelsHandlersProps = {
  form: UseFormReturn<ModelSchema>;
  newImages: File[];
  router: ReturnType<typeof useRouter>;
  selectedRow: Model | null;
  selectedRows: Model[];
  setData: Dispatch<SetStateAction<Model[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Model | null>>;
  setSelectedRows: Dispatch<SetStateAction<Model[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type ModelsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Model) => void;
  handleDeleteMultiple: (rows: Model[]) => void;
  handleEdit: (row: Model) => void;
  handleNavigate: (row: Model) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ModelSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<
  ModelsHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

type DeleteHandlerProps = Pick<
  ModelsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Model };

type DeleteMultipleHandlerProps = Pick<
  ModelsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Model[];
};

type EditHandlerProps = Pick<
  ModelsHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Model;
};

type NavigateHandlerProps = Pick<ModelsHandlersProps, "router"> & {
  row: Model;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ModelsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ModelsHandlersProps,
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
  ModelsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ModelsHandlersProps,
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
  ModelsHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: ModelSchema;
};

export type {
  ModelsHandlersProps,
  ModelsHandlersReturn,
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
