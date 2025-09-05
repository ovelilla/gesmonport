// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Door } from "../../types/doors.types";
import type { DoorSchema } from "../../schemas/types/door.schema.types";

type DoorsHandlersProps = {
  form: UseFormReturn<DoorSchema>;
  newImages: File[];
  router: ReturnType<typeof useRouter>;
  selectedRow: Door | null;
  selectedRows: Door[];
  setData: Dispatch<SetStateAction<Door[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Door | null>>;
  setSelectedRows: Dispatch<SetStateAction<Door[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

type DoorsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Door) => void;
  handleDeleteMultiple: (rows: Door[]) => void;
  handleEdit: (row: Door) => void;
  handleNavigate: (row: Door) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: DoorSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<
  DoorsHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

type DeleteHandlerProps = Pick<
  DoorsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Door };

type DeleteMultipleHandlerProps = Pick<
  DoorsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Door[];
};

type EditHandlerProps = Pick<
  DoorsHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Door;
};

type NavigateHandlerProps = Pick<DoorsHandlersProps, "router"> & {
  row: Door;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  DoorsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  DoorsHandlersProps,
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
  DoorsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  DoorsHandlersProps,
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
  DoorsHandlersProps,
  | "form"
  | "newImages"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: DoorSchema;
};

export type {
  DoorsHandlersProps,
  DoorsHandlersReturn,
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
