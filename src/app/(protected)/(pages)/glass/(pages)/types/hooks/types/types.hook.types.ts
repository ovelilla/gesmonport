// Types
import type { UseFormReturn } from "react-hook-form";
import type { Type } from "../../types/types.types";
import type { TypeSchema } from "../../schemas/types/type.schema.types";
import type { TypesHandlersReturn } from "../../handlers/types/types.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/types.hook.utils.types";

type TypesHookProps = {
  types: Type[];
};

type TypesHookReturn = Omit<
  TypesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Type>;
  data: Type[];
  existingImages: string[];
  form: UseFormReturn<TypeSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Type>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Type | null;
  selectedRows: Type[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { TypesHookProps, TypesHookReturn };
