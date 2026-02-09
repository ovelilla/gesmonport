// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveFamily } from "../../types/architrave-family.types";

type ArchitraveFamilyHandlersProps = {
  data: Matrix<CellBase>;
  architraveFamily: ArchitraveFamily;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type ArchitraveFamilyHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<
  ArchitraveFamilyHandlersProps,
  "data" | "setData"
>;

type AddColumnHandlerProps = Pick<
  ArchitraveFamilyHandlersProps,
  "data" | "setData"
>;

type DeleteRowHandlerProps = Pick<
  ArchitraveFamilyHandlersProps,
  "data" | "setData"
>;

type DeleteColumnHandlerProps = Pick<
  ArchitraveFamilyHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  ArchitraveFamilyHandlersProps,
  "data" | "architraveFamily" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  ArchitraveFamilyHandlersProps,
  ArchitraveFamilyHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
