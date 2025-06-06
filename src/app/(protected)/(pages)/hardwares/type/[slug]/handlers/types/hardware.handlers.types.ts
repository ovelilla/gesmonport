// Vendors
import { useRouter } from "next/navigation";
// Hardwares
import type { Dispatch, SetStateAction } from "react";
import type { Hardware } from "../../types/hardware.types";
import type { HardwareSchema } from "../../schemas/types/hardware.schema.types";
import type { UseFormReturn } from "react-hook-form";

type HardwareHandlersProps = {
  form: UseFormReturn<HardwareSchema>;
  newImages: File[];
  params: { slug: string };
  router: ReturnType<typeof useRouter>;
  selectedRow: Hardware | null;
  selectedRows: Hardware[];
  setData: Dispatch<SetStateAction<Hardware[]>>;
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Hardware | null>>;
  setSelectedRows: Dispatch<SetStateAction<Hardware[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  slug: string;
  toDelete: string[];
};

type HardwareHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Hardware) => void;
  handleDeleteMultiple: (rows: Hardware[]) => void;
  handleEdit: (row: Hardware) => void;
  handleNavigate: (row: Hardware) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: HardwareSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<
  HardwareHandlersProps,
  "setExistingImages" | "setNewImages" | "setOpenDialog" | "setToDelete"
>;

type DeleteHandlerProps = Pick<
  HardwareHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Hardware };

type DeleteMultipleHandlerProps = Pick<
  HardwareHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Hardware[];
};

type EditHandlerProps = Pick<
  HardwareHandlersProps,
  | "form"
  | "setExistingImages"
  | "setNewImages"
  | "setSelectedRow"
  | "setOpenDialog"
  | "setToDelete"
> & {
  row: Hardware;
};

type NavigateHandlerProps = Pick<HardwareHandlersProps, "router" | "slug"> & {
  row: Hardware;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  HardwareHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  HardwareHandlersProps,
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
  | "params"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  HardwareHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  HardwareHandlersProps,
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
  HardwareHandlersProps,
  | "form"
  | "newImages"
  | "params"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "toDelete"
> & {
  values: HardwareSchema;
};

export type {
  HardwareHandlersProps,
  HardwareHandlersReturn,
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
