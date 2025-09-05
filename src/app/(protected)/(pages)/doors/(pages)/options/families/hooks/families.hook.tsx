"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/families.constants";
// Handlers
import { FamiliesHandlers } from "../handlers/families.handlers";
// Schemas
import { familySchema } from "../schemas/family.schema";
// Types
import type { Family } from "../types/families.types";
import type { FamilySchema } from "../schemas/types/family.schema.types";
import type {
  FamiliesHookProps,
  FamiliesHookReturn,
} from "./types/families.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/families.hook.utils";

const FamiliesHook = ({ families }: FamiliesHookProps): FamiliesHookReturn => {
  const [data, setData] = useState<Family[]>(families);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Family | null>(null);
  const [selectedRows, setSelectedRows] = useState<Family[]>([]);
  const [toDelete, setToDelete] = useState<string[]>([]);

  const form = useForm<FamilySchema>({
    resolver: zodResolver(familySchema),
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
  } = FamiliesHandlers({
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

export { FamiliesHook };
