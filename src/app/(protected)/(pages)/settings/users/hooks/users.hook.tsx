"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/users.constants";
// Handlers
import { UsersHandlers } from "../handlers/users.handlers";
// Schemas
import { userSchema } from "../schemas/user.schema";
// Types
import type { User } from "../types/users.types";
import type { UserSchema } from "../schemas/types/user.schema.types";
import type { UsersHookProps, UsersHookReturn } from "./types/users.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/users.hook.utils";

const UsersHook = ({ users }: UsersHookProps): UsersHookReturn => {
  const [data, setData] = useState<User[]>(users);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<User | null>(null);
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const {
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = UsersHandlers({
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

  const columns = getColumnsConfig({ handleDelete, handleEdit });
  const multipleSelectActionsProps = getMultipleSelectActionsProps({
    handleDeleteMultiple,
  });

  return {
    columns,
    data,
    form,
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

export { UsersHook };
