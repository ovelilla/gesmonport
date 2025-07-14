"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/models.constants";
// Handlers
import { ModelsHandlers } from "../handlers/models.handlers";
// Schemas
import { modelSchema } from "../schemas/model.schema";
// Types
import type { Model } from "../types/models.types";
import type { ModelSchema } from "../schemas/types/model.schema.types";
import type {
  ModelsHookProps,
  ModelsHookReturn,
} from "./types/models.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/models.hook.utils";

const ModelsHook = ({ models }: ModelsHookProps): ModelsHookReturn => {
  const [data, setData] = useState<Model[]>(models);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Model | null>(null);
  const [selectedRows, setSelectedRows] = useState<Model[]>([]);
  const [toDelete, setToDelete] = useState<string[]>([]);

  const form = useForm<ModelSchema>({
    resolver: zodResolver(modelSchema),
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
  } = ModelsHandlers({
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

export { ModelsHook };
