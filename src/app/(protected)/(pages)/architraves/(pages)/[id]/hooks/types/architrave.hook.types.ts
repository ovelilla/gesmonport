// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Architrave } from "../../types/architrave.types";
import type { ArchitraveHandlersReturn } from "../../handlers/types/architrave.handlers.types";

type ArchitraveHookProps = {
  architrave: Architrave;
};

type ArchitraveHookReturn = ArchitraveHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { ArchitraveHookProps, ArchitraveHookReturn };
