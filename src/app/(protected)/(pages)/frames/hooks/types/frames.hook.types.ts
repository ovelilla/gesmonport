// Types
import type { UseFormReturn } from "react-hook-form";
import type { Frame } from "../../types/frames.types";
import type { FrameSchema } from "../../schemas/types/frame.schema.types";
import type { FramesHandlersReturn } from "../../handlers/types/frames.handlers.types";
import type { Dispatch, SetStateAction } from "react";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/frames.hook.utils.types";

type FramesHookProps = {
  frames: Frame[];
};

type FramesHookReturn = Omit<
  FramesHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleNavigate"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Frame>;
  data: Frame[];
  existingImages: string[];
  form: UseFormReturn<FrameSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Frame>;
  newImages: File[];
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Frame | null;
  selectedRows: Frame[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { FramesHookProps, FramesHookReturn };
