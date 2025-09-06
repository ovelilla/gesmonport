// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorModel } from "../../types/door-model.types";

type DoorModelHandlersProps = {
  data: Matrix<CellBase>;
  doorModel: DoorModel;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type DoorModelHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<DoorModelHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<DoorModelHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<DoorModelHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  DoorModelHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  DoorModelHandlersProps,
  "data" | "doorModel" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  DoorModelHandlersProps,
  DoorModelHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
