"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { DoorModelHandlers } from "../handlers/door-model.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  DoorModelHookProps,
  DoorModelHookReturn,
} from "./types/door-model.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const DoorModelHook = ({
  doorModel,
}: DoorModelHookProps): DoorModelHookReturn => {
  const [data, setData] = useState<Matrix<CellBase>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [originalData, setOriginalData] = useState<Matrix<CellBase>>([]);

  const hasChanges = JSON.stringify(data) !== JSON.stringify(originalData);

  const { theme } = useTheme();

  const {
    handleAddRow,
    handleAddColumn,
    handleDeleteRow,
    handleDeleteColumn,
    handleSavePrices,
  } = DoorModelHandlers({
    data,
    doorModel,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: doorModel.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [doorModel.prices]);

  return {
    data,
    handleAddColumn,
    handleAddRow,
    handleDeleteColumn,
    handleDeleteRow,
    handleSavePrices,
    hasChanges,
    loading,
    setData,
    theme,
  };
};

export { DoorModelHook };
