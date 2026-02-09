// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveFamily } from "../../types/architrave-family.types";
import type { ArchitraveFamilyHandlersReturn } from "../../handlers/types/architrave-family.handlers.types";

type ArchitraveFamilyHookProps = {
  architraveFamily: ArchitraveFamily;
};

type ArchitraveFamilyHookReturn = ArchitraveFamilyHandlersReturn & {
  data: Matrix<CellBase>;
  hasChanges: boolean;
  loading: boolean;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  theme: string | undefined;
};

export type { ArchitraveFamilyHookProps, ArchitraveFamilyHookReturn };
