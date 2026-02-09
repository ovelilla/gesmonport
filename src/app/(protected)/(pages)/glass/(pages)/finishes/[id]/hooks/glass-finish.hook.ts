"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { GlassFinishHandlers } from "../handlers/glass-finish.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  GlassFinishHookProps,
  GlassFinishHookReturn,
} from "./types/glass-finish.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const GlassFinishHook = ({
  glassFinish,
}: GlassFinishHookProps): GlassFinishHookReturn => {
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
  } = GlassFinishHandlers({
    data,
    glassFinish,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: glassFinish.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [glassFinish.prices]);

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

export { GlassFinishHook };
