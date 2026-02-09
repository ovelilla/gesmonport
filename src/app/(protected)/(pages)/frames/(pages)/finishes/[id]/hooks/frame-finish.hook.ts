"use client";
// Vendors
import { useEffect, useState } from "react";
// Handlers
import { FrameFinishHandlers } from "../handlers/frame-finish.handlers";
// Hooks
import { useTheme } from "next-themes";
// Types
import type { CellBase, Matrix } from "react-spreadsheet";
import type {
  FrameFinishHookProps,
  FrameFinishHookReturn,
} from "./types/frame-finish.hook.types";
// Utils
import { prismaPricesToSpreadsheetData } from "../utils/prisma-prices-to-spreadsheet-data.util";

const FrameFinishHook = ({
  frameFinish,
}: FrameFinishHookProps): FrameFinishHookReturn => {
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
  } = FrameFinishHandlers({
    data,
    frameFinish,
    setData,
    setLoading,
    setOriginalData,
  });

  useEffect(() => {
    const initialData = prismaPricesToSpreadsheetData({
      prices: frameFinish.prices,
    });
    setData(initialData);
    setOriginalData(initialData);
  }, [frameFinish.prices]);

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

export { FrameFinishHook };
