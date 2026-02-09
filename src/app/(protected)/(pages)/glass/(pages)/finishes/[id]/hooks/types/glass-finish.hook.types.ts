// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassFinish } from "../../types/glass-finish.types";
import type { GlassFinishHandlersReturn } from "../../handlers/types/glass-finish.handlers.types";

type GlassFinishHookProps = {
  glassFinish: GlassFinish;
};

type GlassFinishHookReturn = GlassFinishHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { GlassFinishHookProps, GlassFinishHookReturn };
