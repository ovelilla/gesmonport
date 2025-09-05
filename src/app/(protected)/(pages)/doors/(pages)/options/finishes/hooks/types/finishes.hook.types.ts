// Types
import type { UseFormReturn } from "react-hook-form";
import type { Finish } from "../../types/finishes.types";
import type { FinishSchema } from "../../schemas/types/finish.schema.types";
import type { FinishesHandlersReturn } from "../../handlers/types/finishes.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/finishes.hook.utils.types";

type FinishesHookProps = {
  finishes: Finish[];
};

type FinishesHookReturn = Omit<
  FinishesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Finish>;
  data: Finish[];
  existingImages: string[];
  form: UseFormReturn<FinishSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Finish>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Finish | null;
  selectedRows: Finish[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { FinishesHookProps, FinishesHookReturn };
