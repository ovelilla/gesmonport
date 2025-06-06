"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/hardware.constants";
// Handlers
import { HardwareHandlers } from "../handlers/hardware.handlers";
// Schemas
import { hardwareSchema } from "../schemas/hardware.schema";
// Types
import type { Hardware } from "../types/hardware.types";
import type { HardwareSchema } from "../schemas/types/hardware.schema.types";
import type {
  HardwareHookProps,
  HardwareHookReturn,
} from "./types/hardware.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/hardware.hook.utils";

const HardwareHook = ({
  hardwares,
  slug,
}: HardwareHookProps): HardwareHookReturn => {
  const [data, setData] = useState<Hardware[]>(hardwares);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Hardware | null>(null);
  const [selectedRows, setSelectedRows] = useState<Hardware[]>([]);
  const [toDelete, setToDelete] = useState<string[]>([]);

  const form = useForm<HardwareSchema>({
    resolver: zodResolver(hardwareSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const params = useParams<{ slug: string }>();

  const router = useRouter();

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleNavigate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = HardwareHandlers({
    form,
    newImages,
    params,
    router,
    selectedRow,
    selectedRows,
    setData,
    setExistingImages,
    setLoading,
    setNewImages,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
    setToDelete,
    slug,
    toDelete,
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleEdit,
    handleNavigate,
    slug,
  });

  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    existingImages,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    newImages,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setExistingImages,
    setNewImages,
    setToDelete,
    toDelete,
  };
};

export { HardwareHook };
