// Types
import type { UseFormReturn } from "react-hook-form";
import type { Extra } from "../../types/extras.types";
import type { ExtraSchema } from "../../schemas/types/extras.schema.types";
import type { ExtrasHandlersReturn } from "../../handlers/types/extras.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/extras.hook.utils.types";

type ExtrasHookProps = {
  extras: Extra[];
};

type ExtrasHookReturn = Omit<
  ExtrasHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Extra>;
  data: Extra[];
  existingImages: string[];
  form: UseFormReturn<ExtraSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Extra>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Extra | null;
  selectedRows: Extra[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { ExtrasHookProps, ExtrasHookReturn };
