"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { FrameHandlers } from "../handlers/frame.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type { FrameHookProps, FrameHookReturn } from "./types/frame.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const FrameHook = ({ frame }: FrameHookProps): FrameHookReturn => {
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
  } = FrameHandlers({ data, frame, setData, setLoading, setOriginalData });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({ prices: frame.prices });
    setData(initialData);
    setOriginalData(initialData);
  }, [frame.prices]);

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

export { FrameHook };
