"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { DoorFamilyHandlers } from "../handlers/door-family.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  DoorFamilyHookProps,
  DoorFamilyHookReturn,
} from "./types/door-family.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const DoorFamilyHook = ({
  doorFamily,
}: DoorFamilyHookProps): DoorFamilyHookReturn => {
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
  } = DoorFamilyHandlers({
    data,
    doorFamily,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: doorFamily.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [doorFamily.prices]);

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

export { DoorFamilyHook };
