// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Door } from "../../types/door.types";
import type { DoorHandlersReturn } from "../../handlers/types/door.handlers.types";

type DoorHookProps = {
  door: Door;
};

type DoorHookReturn = DoorHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { DoorHookProps, DoorHookReturn };
