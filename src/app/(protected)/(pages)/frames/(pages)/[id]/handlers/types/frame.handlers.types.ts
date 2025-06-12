// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Frame } from "../../types/frame.types";

type FrameHandlersProps = {
  data: Matrix<CellBase>;
  frame: Frame;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type FrameHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<FrameHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<FrameHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<FrameHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<FrameHandlersProps, "data" | "setData">;

type SavePricesHandlerProps = Pick<
  FrameHandlersProps,
  "data" | "frame" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  FrameHandlersProps,
  FrameHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
