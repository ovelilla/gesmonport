// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameFinish } from "../../types/frame-finish.types";
import type { FrameFinishHandlersReturn } from "../../handlers/types/frame-finish.handlers.types";

type FrameFinishHookProps = {
  frameFinish: FrameFinish;
};

type FrameFinishHookReturn = FrameFinishHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { FrameFinishHookProps, FrameFinishHookReturn };
