// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameFamily } from "../../types/frame-family.types";

type FrameFamilyHandlersProps = {
  data: Matrix<CellBase>;
  frameFamily: FrameFamily;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type FrameFamilyHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<FrameFamilyHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<FrameFamilyHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<FrameFamilyHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  FrameFamilyHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  FrameFamilyHandlersProps,
  "data" | "frameFamily" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  FrameFamilyHandlersProps,
  FrameFamilyHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
