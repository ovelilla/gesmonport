// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Family } from "../../types/families.types";
import type { FamilySchema } from "../../schemas/types/family.schema.types";

type FamiliesHandlersProps = {
  form: UseFormReturn<FamilySchema>;
  newImages: File[];
  router: ReturnType<typeof useRouter>;
  selectedRow: Family | null;
  selectedRows: Family[];
  setData: Dispatch<SetStateAction<Family[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Family | null>>;
  setSelectedRows: Dispatch<SetStateAction<Family[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type FamiliesHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Family) => void;
  handleDeleteMultiple: (rows: Family[]) => void;
  handleEdit: (row: Family) => void;
  handleNavigate: (row: Family) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: FamilySchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<
  FamiliesHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

type DeleteHandlerProps = Pick<
  FamiliesHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Family };

type DeleteMultipleHandlerProps = Pick<
  FamiliesHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Family[];
};

type EditHandlerProps = Pick<
  FamiliesHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Family;
};

type NavigateHandlerProps = Pick<FamiliesHandlersProps, "router"> & {
  row: Family;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  FamiliesHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  FamiliesHandlersProps,
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
  FamiliesHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  FamiliesHandlersProps,
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
  FamiliesHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: FamilySchema;
};

export type {
  FamiliesHandlersProps,
  FamiliesHandlersReturn,
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
