// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameType } from "../../types/frame-type.types";
import type { FrameTypeHandlersReturn } from "../../handlers/types/frame-type.handlers.types";

type FrameTypeHookProps = {
  frameType: FrameType;
};

type FrameTypeHookReturn = FrameTypeHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { FrameTypeHookProps, FrameTypeHookReturn };
