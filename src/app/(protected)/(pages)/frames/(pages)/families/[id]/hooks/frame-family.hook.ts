"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { FrameFamilyHandlers } from "../handlers/frame-family.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  FrameFamilyHookProps,
  FrameFamilyHookReturn,
} from "./types/frame-family.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const FrameFamilyHook = ({
  frameFamily,
}: FrameFamilyHookProps): FrameFamilyHookReturn => {
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
  } = FrameFamilyHandlers({
    data,
    frameFamily,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: frameFamily.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [frameFamily.prices]);

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

export { FrameFamilyHook };
