// Types
import type { UseFormReturn } from "react-hook-form";
import type { Family } from "../../types/families.types";
import type { FamilySchema } from "../../schemas/types/family.schema.types";
import type { FamiliesHandlersReturn } from "../../handlers/types/families.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/families.hook.utils.types";

type FamiliesHookProps = {
  families: Family[];
};

type FamiliesHookReturn = Omit<
  FamiliesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Family>;
  data: Family[];
  existingImages: string[];
  form: UseFormReturn<FamilySchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Family>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Family | null;
  selectedRows: Family[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { FamiliesHookProps, FamiliesHookReturn };
