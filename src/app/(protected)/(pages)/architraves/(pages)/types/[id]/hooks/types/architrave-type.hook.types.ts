// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveType } from "../../types/architrave-type.types";
import type { ArchitraveTypeHandlersReturn } from "../../handlers/types/architrave-type.handlers.types";

type ArchitraveTypeHookProps = {
  architraveType: ArchitraveType;
};

type ArchitraveTypeHookReturn = ArchitraveTypeHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { ArchitraveTypeHookProps, ArchitraveTypeHookReturn };
