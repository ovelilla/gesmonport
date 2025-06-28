// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Architrave } from "../../types/architrave.types";

type ArchitraveHandlersProps = {
  data: Matrix<CellBase>;
  architrave: Architrave;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type ArchitraveHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<ArchitraveHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<ArchitraveHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<ArchitraveHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  ArchitraveHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  ArchitraveHandlersProps,
  "data" | "architrave" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  ArchitraveHandlersProps,
  ArchitraveHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
