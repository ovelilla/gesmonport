"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { ArchitraveFamilyHandlers } from "../handlers/architrave-family.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  ArchitraveFamilyHookProps,
  ArchitraveFamilyHookReturn,
} from "./types/architrave-family.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const ArchitraveFamilyHook = ({
  architraveFamily,
}: ArchitraveFamilyHookProps): ArchitraveFamilyHookReturn => {
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
  } = ArchitraveFamilyHandlers({
    data,
    architraveFamily,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: architraveFamily.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [architraveFamily.prices]);

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

export { ArchitraveFamilyHook };
