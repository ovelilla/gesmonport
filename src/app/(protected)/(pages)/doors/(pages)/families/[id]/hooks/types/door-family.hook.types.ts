// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorFamily } from "../../types/door-family.types";
import type { DoorFamilyHandlersReturn } from "../../handlers/types/door-family.handlers.types";

type DoorFamilyHookProps = {
  doorFamily: DoorFamily;
};

type DoorFamilyHookReturn = DoorFamilyHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { DoorFamilyHookProps, DoorFamilyHookReturn };
