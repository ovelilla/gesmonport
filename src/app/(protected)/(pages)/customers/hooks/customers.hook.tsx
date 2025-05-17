"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/customers.constants";
// Handlers
import { CustomersHandlers } from "../handlers/customers.handlers";
// Schemas
import { customerSchema } from "../schemas/customer.schema";
// Types
import type { Customer } from "../types/customers.types";
import type { CustomerSchema } from "../schemas/types/customer.schema.types";
import type {
  CustomersHookProps,
  CustomersHookReturn,
} from "./types/customers.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/customers.hook.utils";

const CustomersHook = ({
  customers,
}: CustomersHookProps): CustomersHookReturn => {
  const [data, setData] = useState<Customer[]>(customers);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Customer | null>(null);
  const [selectedRows, setSelectedRows] = useState<Customer[]>([]);

  const form = useForm<CustomerSchema>({
    resolver: zodResolver(customerSchema),
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
  } = CustomersHandlers({
    form,
    router,
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
    handleNavigate,
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

export { CustomersHook };
