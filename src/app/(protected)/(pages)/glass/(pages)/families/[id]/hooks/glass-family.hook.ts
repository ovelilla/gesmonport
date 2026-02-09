"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { GlassFamilyHandlers } from "../handlers/glass-family.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  GlassFamilyHookProps,
  GlassFamilyHookReturn,
} from "./types/glass-family.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const GlassFamilyHook = ({
  glassFamily,
}: GlassFamilyHookProps): GlassFamilyHookReturn => {
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
  } = GlassFamilyHandlers({
    data,
    glassFamily,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: glassFamily.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [glassFamily.prices]);

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

export { GlassFamilyHook };
