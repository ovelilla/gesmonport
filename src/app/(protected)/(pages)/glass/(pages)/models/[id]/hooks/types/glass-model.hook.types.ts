// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassModel } from "../../types/glass-model.types";
import type { GlassModelHandlersReturn } from "../../handlers/types/glass-model.handlers.types";

type GlassModelHookProps = {
  glassModel: GlassModel;
};

type GlassModelHookReturn = GlassModelHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { GlassModelHookProps, GlassModelHookReturn };
