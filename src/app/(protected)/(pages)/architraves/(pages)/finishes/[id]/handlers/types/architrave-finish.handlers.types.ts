// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveFinish } from "../../types/architrave-finish.types";

type ArchitraveFinishHandlersProps = {
  data: Matrix<CellBase>;
  architraveFinish: ArchitraveFinish;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type ArchitraveFinishHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<
  ArchitraveFinishHandlersProps,
  "data" | "setData"
>;

type AddColumnHandlerProps = Pick<
  ArchitraveFinishHandlersProps,
  "data" | "setData"
>;

type DeleteRowHandlerProps = Pick<
  ArchitraveFinishHandlersProps,
  "data" | "setData"
>;

type DeleteColumnHandlerProps = Pick<
  ArchitraveFinishHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  ArchitraveFinishHandlersProps,
  "data" | "architraveFinish" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  ArchitraveFinishHandlersProps,
  ArchitraveFinishHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
