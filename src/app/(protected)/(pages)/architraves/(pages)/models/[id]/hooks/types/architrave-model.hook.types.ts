// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveModel } from "../../types/architrave-model.types";
import type { ArchitraveModelHandlersReturn } from "../../handlers/types/architrave-model.handlers.types";

type ArchitraveModelHookProps = {
  architraveModel: ArchitraveModel;
};

type ArchitraveModelHookReturn = ArchitraveModelHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { ArchitraveModelHookProps, ArchitraveModelHookReturn };
