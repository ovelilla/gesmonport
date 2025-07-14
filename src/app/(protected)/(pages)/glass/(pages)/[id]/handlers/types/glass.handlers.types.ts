// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Glass } from "../../types/glass.types";

type GlassHandlersProps = {
  data: Matrix<CellBase>;
  glass: Glass;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type GlassHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<GlassHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<GlassHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<GlassHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<GlassHandlersProps, "data" | "setData">;

type SavePricesHandlerProps = Pick<
  GlassHandlersProps,
  "data" | "glass" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  GlassHandlersProps,
  GlassHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
