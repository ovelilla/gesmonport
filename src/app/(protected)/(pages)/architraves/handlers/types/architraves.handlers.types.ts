// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Architrave } from "../../types/architraves.types";
import type { ArchitraveSchema } from "../../schemas/types/architrave.schema.types";

type ArchitravesHandlersProps = {
  form: UseFormReturn<ArchitraveSchema>;
  newImages: File[];
  router: ReturnType<typeof useRouter>;
  selectedRow: Architrave | null;
  selectedRows: Architrave[];
  setData: Dispatch<SetStateAction<Architrave[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Architrave | null>>;
  setSelectedRows: Dispatch<SetStateAction<Architrave[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type ArchitravesHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Architrave) => void;
  handleDeleteMultiple: (rows: Architrave[]) => void;
  handleEdit: (row: Architrave) => void;
  handleNavigate: (row: Architrave) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ArchitraveSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<
  ArchitravesHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

type DeleteHandlerProps = Pick<
  ArchitravesHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Architrave };

type DeleteMultipleHandlerProps = Pick<
  ArchitravesHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Architrave[];
};

type EditHandlerProps = Pick<
  ArchitravesHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Architrave;
};

type NavigateHandlerProps = Pick<ArchitravesHandlersProps, "router"> & {
  row: Architrave;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ArchitravesHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ArchitravesHandlersProps,
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
  ArchitravesHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ArchitravesHandlersProps,
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
  ArchitravesHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: ArchitraveSchema;
};

export type {
  ArchitravesHandlersProps,
  ArchitravesHandlersReturn,
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
