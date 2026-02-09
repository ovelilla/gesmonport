// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassType } from "../../types/glass-type.types";

type GlassTypeHandlersProps = {
  data: Matrix<CellBase>;
  glassType: GlassType;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type GlassTypeHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<GlassTypeHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<GlassTypeHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<GlassTypeHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  GlassTypeHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  GlassTypeHandlersProps,
  "data" | "glassType" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  GlassTypeHandlersProps,
  GlassTypeHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
