// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorType } from "../../types/door-type.types";
import type { DoorTypeHandlersReturn } from "../../handlers/types/door-type.handlers.types";

type DoorTypeHookProps = {
  doorType: DoorType;
};

type DoorTypeHookReturn = DoorTypeHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { DoorTypeHookProps, DoorTypeHookReturn };
