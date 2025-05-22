"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/departments.constants";
// Handlers
import { DepartmentsHandlers } from "../handlers/departments.handlers";
// Schemas
import { departmentSchema } from "../schemas/department.schema";
// Types
import type { Department } from "../types/departments.types";
import type { DepartmentSchema } from "../schemas/types/department.schema.types";
import type {
  DepartmentsHookProps,
  DepartmentsHookReturn,
} from "./types/departments.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/departments.hook.utils";

const DepartmentsHook = ({
  departments,
}: DepartmentsHookProps): DepartmentsHookReturn => {
  const [data, setData] = useState<Department[]>(departments);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Department | null>(null);
  const [selectedRows, setSelectedRows] = useState<Department[]>([]);

  const form = useForm<DepartmentSchema>({
    resolver: zodResolver(departmentSchema),
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
  } = DepartmentsHandlers({
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

export { DepartmentsHook };
