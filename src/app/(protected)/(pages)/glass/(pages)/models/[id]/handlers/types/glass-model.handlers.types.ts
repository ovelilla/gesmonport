// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassModel } from "../../types/glass-model.types";

type GlassModelHandlersProps = {
  data: Matrix<CellBase>;
  glassModel: GlassModel;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type GlassModelHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<GlassModelHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<GlassModelHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<GlassModelHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  GlassModelHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  GlassModelHandlersProps,
  "data" | "glassModel" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  GlassModelHandlersProps,
  GlassModelHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
