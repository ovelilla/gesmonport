// Types
import type { UseFormReturn } from "react-hook-form";
import type { Model } from "../../types/models.types";
import type { ModelSchema } from "../../schemas/types/models.schema.types";
import type { ModelsHandlersReturn } from "../../handlers/types/models.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/models.hook.utils.types";

type ModelsHookProps = {
  models: Model[];
};

type ModelsHookReturn = Omit<
  ModelsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Model>;
  data: Model[];
  existingImages: string[];
  form: UseFormReturn<ModelSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Model>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Model | null;
  selectedRows: Model[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { ModelsHookProps, ModelsHookReturn };
