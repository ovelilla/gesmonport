"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/positions.constants";
// Handlers
import { PositionsHandlers } from "../handlers/positions.handlers";
// Schemas
import { positionSchema } from "../schemas/position.schema";
// Types
import type { Position } from "../types/positions.types";
import type { PositionSchema } from "../schemas/types/position.schema.types";
import type {
  PositionsHookProps,
  PositionsHookReturn,
} from "./types/positions.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/positions.hook.utils";

const PositionsHook = ({
  positions,
}: PositionsHookProps): PositionsHookReturn => {
  const [data, setData] = useState<Position[]>(positions);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Position | null>(null);
  const [selectedRows, setSelectedRows] = useState<Position[]>([]);

  const form = useForm<PositionSchema>({
    resolver: zodResolver(positionSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = PositionsHandlers({
    form,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleEdit,
  });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
  };
};

export { PositionsHook };
