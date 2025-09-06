// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorFinish } from "../../types/door-finish.types";
import type { DoorFinishHandlersReturn } from "../../handlers/types/door-finish.handlers.types";

type DoorFinishHookProps = {
  doorFinish: DoorFinish;
};

type DoorFinishHookReturn = DoorFinishHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { DoorFinishHookProps, DoorFinishHookReturn };
