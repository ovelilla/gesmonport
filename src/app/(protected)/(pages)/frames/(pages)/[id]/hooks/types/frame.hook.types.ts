// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Frame } from "../../types/frame.types";
import type { FrameHandlersReturn } from "../../handlers/types/frame.handlers.types";

type FrameHookProps = {
  frame: Frame;
};

type FrameHookReturn = FrameHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { FrameHookProps, FrameHookReturn };
