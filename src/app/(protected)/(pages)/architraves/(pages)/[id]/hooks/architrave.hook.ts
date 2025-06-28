"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { ArchitraveHandlers } from "../handlers/architrave.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  ArchitraveHookProps,
  ArchitraveHookReturn,
} from "./types/architrave.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const ArchitraveHook = ({
  architrave,
}: ArchitraveHookProps): ArchitraveHookReturn => {
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
  } = ArchitraveHandlers({
    data,
    architrave,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: architrave.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [architrave.prices]);

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

export { ArchitraveHook };
