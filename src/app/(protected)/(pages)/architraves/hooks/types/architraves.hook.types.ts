// Types
import type { UseFormReturn } from "react-hook-form";
import type { Architrave } from "../../types/architraves.types";
import type { ArchitraveSchema } from "../../schemas/types/architrave.schema.types";
import type { ArchitravesHandlersReturn } from "../../handlers/types/architraves.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/architraves.hook.utils.types";

type ArchitravesHookProps = {
  architraves: Architrave[];
};

type ArchitravesHookReturn = Omit<
  ArchitravesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Architrave>;
  data: Architrave[];
  existingImages: string[];
  form: UseFormReturn<ArchitraveSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Architrave>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Architrave | null;
  selectedRows: Architrave[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { ArchitravesHookProps, ArchitravesHookReturn };
