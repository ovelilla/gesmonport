// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveType } from "../../types/architrave-type.types";

type ArchitraveTypeHandlersProps = {
  data: Matrix<CellBase>;
  architraveType: ArchitraveType;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type ArchitraveTypeHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<ArchitraveTypeHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<
  ArchitraveTypeHandlersProps,
  "data" | "setData"
>;

type DeleteRowHandlerProps = Pick<
  ArchitraveTypeHandlersProps,
  "data" | "setData"
>;

type DeleteColumnHandlerProps = Pick<
  ArchitraveTypeHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  ArchitraveTypeHandlersProps,
  "data" | "architraveType" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  ArchitraveTypeHandlersProps,
  ArchitraveTypeHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
