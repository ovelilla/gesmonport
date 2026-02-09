// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameFamily } from "../../types/frame-family.types";
import type { FrameFamilyHandlersReturn } from "../../handlers/types/frame-family.handlers.types";

type FrameFamilyHookProps = {
  frameFamily: FrameFamily;
};

type FrameFamilyHookReturn = FrameFamilyHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { FrameFamilyHookProps, FrameFamilyHookReturn };
