// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassFinish } from "../../types/glass-finish.types";

type GlassFinishHandlersProps = {
  data: Matrix<CellBase>;
  glassFinish: GlassFinish;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type GlassFinishHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<GlassFinishHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<GlassFinishHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<GlassFinishHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  GlassFinishHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  GlassFinishHandlersProps,
  "data" | "glassFinish" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  GlassFinishHandlersProps,
  GlassFinishHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
