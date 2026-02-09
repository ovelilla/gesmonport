// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameModel } from "../../types/frame-model.types";
import type { FrameModelHandlersReturn } from "../../handlers/types/frame-model.handlers.types";

type FrameModelHookProps = {
  frameModel: FrameModel;
};

type FrameModelHookReturn = FrameModelHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { FrameModelHookProps, FrameModelHookReturn };
