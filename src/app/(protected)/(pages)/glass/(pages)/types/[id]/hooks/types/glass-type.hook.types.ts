// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassType } from "../../types/glass-type.types";
import type { GlassTypeHandlersReturn } from "../../handlers/types/glass-type.handlers.types";

type GlassTypeHookProps = {
  glassType: GlassType;
};

type GlassTypeHookReturn = GlassTypeHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { GlassTypeHookProps, GlassTypeHookReturn };
