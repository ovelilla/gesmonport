// Types
import type { UseFormReturn } from "react-hook-form";
import type { Door } from "../../types/doors.types";
import type { DoorSchema } from "../../schemas/types/door.schema.types";
import type { DoorsHandlersReturn } from "../../handlers/types/doors.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/doors.hook.utils.types";

type DoorsHookProps = {
  doors: Door[];
};

type DoorsHookReturn = Omit<
  DoorsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Door>;
  data: Door[];
  existingImages: string[];
  form: UseFormReturn<DoorSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Door>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Door | null;
  selectedRows: Door[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { DoorsHookProps, DoorsHookReturn };
