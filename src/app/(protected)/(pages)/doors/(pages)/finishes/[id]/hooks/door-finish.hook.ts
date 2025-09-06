"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { DoorFinishHandlers } from "../handlers/door-finish.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  DoorFinishHookProps,
  DoorFinishHookReturn,
} from "./types/door-finish.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const DoorFinishHook = ({
  doorFinish,
}: DoorFinishHookProps): DoorFinishHookReturn => {
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
  } = DoorFinishHandlers({
    data,
    doorFinish,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: doorFinish.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [doorFinish.prices]);

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

export { DoorFinishHook };
