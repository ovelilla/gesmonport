// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { ArchitraveModel } from "../../types/architrave-model.types";

type ArchitraveModelHandlersProps = {
  data: Matrix<CellBase>;
  architraveModel: ArchitraveModel;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type ArchitraveModelHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<
  ArchitraveModelHandlersProps,
  "data" | "setData"
>;

type AddColumnHandlerProps = Pick<
  ArchitraveModelHandlersProps,
  "data" | "setData"
>;

type DeleteRowHandlerProps = Pick<
  ArchitraveModelHandlersProps,
  "data" | "setData"
>;

type DeleteColumnHandlerProps = Pick<
  ArchitraveModelHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  ArchitraveModelHandlersProps,
  "data" | "architraveModel" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  ArchitraveModelHandlersProps,
  ArchitraveModelHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
