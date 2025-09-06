// Types
import type { Dispatch, SetStateAction } from "react";
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorFamily } from "../../types/door-family.types";

type DoorFamilyHandlersProps = {
  data: Matrix<CellBase>;
  doorFamily: DoorFamily;
  setData: Dispatch<SetStateAction<Matrix<CellBase>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOriginalData: Dispatch<SetStateAction<Matrix<CellBase>>>;
};

type DoorFamilyHandlersReturn = {
  handleAddRow: () => void;
  handleAddColumn: () => void;
  handleDeleteRow: () => void;
  handleDeleteColumn: () => void;
  handleSavePrices: () => void;
};

type AddRowHandlerProps = Pick<DoorFamilyHandlersProps, "data" | "setData">;

type AddColumnHandlerProps = Pick<DoorFamilyHandlersProps, "data" | "setData">;

type DeleteRowHandlerProps = Pick<DoorFamilyHandlersProps, "data" | "setData">;

type DeleteColumnHandlerProps = Pick<
  DoorFamilyHandlersProps,
  "data" | "setData"
>;

type SavePricesHandlerProps = Pick<
  DoorFamilyHandlersProps,
  "data" | "doorFamily" | "setData" | "setLoading" | "setOriginalData"
>;

export type {
  DoorFamilyHandlersProps,
  DoorFamilyHandlersReturn,
  AddRowHandlerProps,
  AddColumnHandlerProps,
  DeleteRowHandlerProps,
  DeleteColumnHandlerProps,
  SavePricesHandlerProps,
};
