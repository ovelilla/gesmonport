// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Glass } from "../../types/glass.types";
import type { GlassHandlersReturn } from "../../handlers/types/glass.handlers.types";

type GlassHookProps = {
  glass: Glass;
};

type GlassHookReturn = GlassHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { GlassHookProps, GlassHookReturn };
