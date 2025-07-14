"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { GlassHandlers } from "../handlers/glass.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type { GlassHookProps, GlassHookReturn } from "./types/glass.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const GlassHook = ({ glass }: GlassHookProps): GlassHookReturn => {
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
  } = GlassHandlers({ data, glass, setData, setLoading, setOriginalData });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({ prices: glass.prices });
    setData(initialData);
    setOriginalData(initialData);
  }, [glass.prices]);

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

export { GlassHook };
