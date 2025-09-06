// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorModel } from "../../types/door-model.types";
import type { DoorModelHandlersReturn } from "../../handlers/types/door-model.handlers.types";

type DoorModelHookProps = {
  doorModel: DoorModel;
};

type DoorModelHookReturn = DoorModelHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { DoorModelHookProps, DoorModelHookReturn };
