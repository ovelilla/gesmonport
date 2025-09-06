// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorType } from "../../types/door-type.types";

type DoorTypeHandlersProps = {
  data: Matrix<CellBase>;
  doorType: DoorType;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type DoorTypeHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<DoorTypeHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<DoorTypeHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<DoorTypeHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<DoorTypeHandlersProps, "data" | "setData">;

type SavePricesHandlerProps = Pick<
  DoorTypeHandlersProps,
  "data" | "doorType" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  DoorTypeHandlersProps,
  DoorTypeHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
