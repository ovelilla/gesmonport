"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { ArchitraveModelHandlers } from "../handlers/architrave-model.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  ArchitraveModelHookProps,
  ArchitraveModelHookReturn,
} from "./types/architrave-model.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const ArchitraveModelHook = ({
  architraveModel,
}: ArchitraveModelHookProps): ArchitraveModelHookReturn => {
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
  } = ArchitraveModelHandlers({
    data,
    architraveModel,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: architraveModel.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [architraveModel.prices]);

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

export { ArchitraveModelHook };
