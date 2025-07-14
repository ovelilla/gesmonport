// Types
import type { UseFormReturn } from "react-hook-form";
import type { Glass } from "../../types/glass.types";
import type { GlassSchema } from "../../schemas/types/glass.schema.types";
import type { GlassHandlersReturn } from "../../handlers/types/glass.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/glass.hook.utils.types";

type GlassHookProps = {
  glass: Glass[];
};

type GlassHookReturn = Omit<
  GlassHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Glass>;
  data: Glass[];
  existingImages: string[];
  form: UseFormReturn<GlassSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Glass>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Glass | null;
  selectedRows: Glass[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { GlassHookProps, GlassHookReturn };
