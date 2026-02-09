// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameFinish } from "../../types/frame-finish.types";

type FrameFinishHandlersProps = {
  data: Matrix<CellBase>;
  frameFinish: FrameFinish;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type FrameFinishHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<FrameFinishHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<FrameFinishHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<FrameFinishHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  FrameFinishHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  FrameFinishHandlersProps,
  "data" | "frameFinish" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  FrameFinishHandlersProps,
  FrameFinishHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
