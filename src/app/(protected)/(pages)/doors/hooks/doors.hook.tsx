"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/doors.constants";
// Handlers
import { DoorsHandlers } from "../handlers/doors.handlers";
// Schemas
import { doorSchema } from "../schemas/door.schema";
// Types
import type { Door } from "../types/doors.types";
import type { DoorSchema } from "../schemas/types/door.schema.types";
import type {
  DoorsHookProps,
  DoorsHookReturn,
} from "./types/doors.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/doors.hook.utils";

const DoorsHook = ({ doors }: DoorsHookProps): DoorsHookReturn => {
  const [data, setData] = useState<Door[]>(doors);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Door | null>(null);
  const [selectedRows, setSelectedRows] = useState<Door[]>([]);
  const [toDelete, setToDelete] = useState<string[]>([]);

  const form = useForm<DoorSchema>({
    resolver: zodResolver(doorSchema),
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
  } = DoorsHandlers({
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

export { DoorsHook };
