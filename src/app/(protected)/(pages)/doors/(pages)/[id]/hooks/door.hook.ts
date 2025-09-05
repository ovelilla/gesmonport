"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { DoorHandlers } from "../handlers/door.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type { DoorHookProps, DoorHookReturn } from "./types/door.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const DoorHook = ({ door }: DoorHookProps): DoorHookReturn => {
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
  } = DoorHandlers({ data, door, setData, setLoading, setOriginalData });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({ prices: door.prices });
    setData(initialData);
    setOriginalData(initialData);
  }, [door.prices]);

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

export { DoorHook };
