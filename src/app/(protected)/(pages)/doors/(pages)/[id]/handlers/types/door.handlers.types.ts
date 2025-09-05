// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { Door } from "../../types/door.types";

type DoorHandlersProps = {
  data: Matrix<CellBase>;
  door: Door;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type DoorHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<DoorHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<DoorHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<DoorHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<DoorHandlersProps, "data" | "setData">;

type SavePricesHandlerProps = Pick<
  DoorHandlersProps,
  "data" | "door" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  DoorHandlersProps,
  DoorHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
