"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/extras.constants";
// Handlers
import { ExtrasHandlers } from "../handlers/extras.handlers";
// Schemas
import { extraSchema } from "../schemas/extras.schema";
// Types
import type { Extra } from "../types/extras.types";
import type { ExtraSchema } from "../schemas/types/extras.schema.types";
import type {
  ExtrasHookProps,
  ExtrasHookReturn,
} from "./types/extras.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/extras.hook.utils";

const ExtrasHook = ({ extras }: ExtrasHookProps): ExtrasHookReturn => {
  const [data, setData] = useState<Extra[]>(extras);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Extra | null>(null);
  const [selectedRows, setSelectedRows] = useState<Extra[]>([]);
  const [toDelete, setToDelete] = useState<string[]>([]);

  const form = useForm<ExtraSchema>({
    resolver: zodResolver(extraSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

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
  } = ExtrasHandlers({
    form,
    newImages,
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
    toDelete,
  });

  const columns = getColumnsConfig({
    handleDelete,
    handleEdit,
    handleNavigate,
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

export { ExtrasHook };
