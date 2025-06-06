// Types
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/hardware.hook.utils.types";
import type { Hardware } from "../../types/hardware.types";
import type { HardwareHandlersReturn } from "../../handlers/types/hardware.handlers.types";
import type { HardwareSchema } from "../../schemas/types/hardware.schema.types";
import type { UseFormReturn } from "react-hook-form";

type HardwareHookProps = {
  hardwares: Hardware[];
  slug: string;
};

type HardwareHookReturn = Omit<
  HardwareHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Hardware>;
  data: Hardware[];
  existingImages: string[];
  form: UseFormReturn<HardwareSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Hardware>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Hardware | null;
  selectedRows: Hardware[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { HardwareHookProps, HardwareHookReturn };
