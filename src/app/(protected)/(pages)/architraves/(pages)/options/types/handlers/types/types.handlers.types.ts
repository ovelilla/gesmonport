// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Type } from "../../types/types.types";
import type { TypeSchema } from "../../schemas/types/type.schema.types";

type TypesHandlersProps = {
  form: UseFormReturn<TypeSchema>;
  newImages: File[];
  router: ReturnType<typeof useRouter>;
  selectedRow: Type | null;
  selectedRows: Type[];
  setData: Dispatch<SetStateAction<Type[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Type | null>>;
  setSelectedRows: Dispatch<SetStateAction<Type[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
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

type CreateHandlerProps = Pick<
  TypesHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

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
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
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
  | "form"
  | "newImages"
  | "router"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "values"
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
  | "newImages"
  | "router"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
  | "values"
>;

type SubmitHandlerProps = Pick<
  TypesHandlersProps,
  | "form"
  | "newImages"
  | "router"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
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
