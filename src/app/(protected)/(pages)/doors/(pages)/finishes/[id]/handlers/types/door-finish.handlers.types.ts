// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorFinish } from "../../types/door-finish.types";

type DoorFinishHandlersProps = {
  data: Matrix<CellBase>;
  doorFinish: DoorFinish;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type DoorFinishHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<DoorFinishHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<DoorFinishHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<DoorFinishHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  DoorFinishHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  DoorFinishHandlersProps,
  "data" | "doorFinish" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  DoorFinishHandlersProps,
  DoorFinishHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
