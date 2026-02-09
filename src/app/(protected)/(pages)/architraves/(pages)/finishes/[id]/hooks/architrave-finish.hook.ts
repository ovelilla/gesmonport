"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { ArchitraveFinishHandlers } from "../handlers/architrave-finish.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  ArchitraveFinishHookProps,
  ArchitraveFinishHookReturn,
} from "./types/architrave-finish.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const ArchitraveFinishHook = ({
  architraveFinish,
}: ArchitraveFinishHookProps): ArchitraveFinishHookReturn => {
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
  } = ArchitraveFinishHandlers({
    data,
    architraveFinish,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: architraveFinish.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [architraveFinish.prices]);

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

export { ArchitraveFinishHook };
