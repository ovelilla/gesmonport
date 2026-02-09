// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameModel } from "../../types/frame-model.types";

type FrameModelHandlersProps = {
  data: Matrix<CellBase>;
  frameModel: FrameModel;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type FrameModelHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<FrameModelHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<FrameModelHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<FrameModelHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  FrameModelHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  FrameModelHandlersProps,
  "data" | "frameModel" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  FrameModelHandlersProps,
  FrameModelHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
