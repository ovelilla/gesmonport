// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameType } from "../../types/frame-type.types";

type FrameTypeHandlersProps = {
  data: Matrix<CellBase>;
  frameType: FrameType;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type FrameTypeHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<FrameTypeHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<FrameTypeHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<FrameTypeHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  FrameTypeHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  FrameTypeHandlersProps,
  "data" | "frameType" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  FrameTypeHandlersProps,
  FrameTypeHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
