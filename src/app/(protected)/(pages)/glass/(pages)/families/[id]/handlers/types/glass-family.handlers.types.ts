// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassFamily } from "../../types/glass-family.types";

type GlassFamilyHandlersProps = {
  data: Matrix<CellBase>;
  glassFamily: GlassFamily;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type GlassFamilyHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<GlassFamilyHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<GlassFamilyHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<GlassFamilyHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  GlassFamilyHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  GlassFamilyHandlersProps,
  "data" | "glassFamily" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  GlassFamilyHandlersProps,
  GlassFamilyHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
