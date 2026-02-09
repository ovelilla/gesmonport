// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveFinish } from "../../types/architrave-finish.types";
import type { ArchitraveFinishHandlersReturn } from "../../handlers/types/architrave-finish.handlers.types";

type ArchitraveFinishHookProps = {
  architraveFinish: ArchitraveFinish;
};

type ArchitraveFinishHookReturn = ArchitraveFinishHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { ArchitraveFinishHookProps, ArchitraveFinishHookReturn };
