"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/payment-methods.constants";
// Handlers
import { PaymentMethodsHandlers } from "../handlers/payment-methods.handlers";
// Schemas
import { paymentMethodSchema } from "../schemas/payment-method.schema";
// Types
import type { PaymentMethod } from "../types/payment-methods.types";
import type { PaymentMethodSchema } from "../schemas/types/payment-method.schema.types";
import type {
  PaymentMethodsHookProps,
  PaymentMethodsHookReturn,
} from "./types/payment-methods.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/payment-methods.hook.utils";

const PaymentMethodsHook = ({
  paymentMethods,
}: PaymentMethodsHookProps): PaymentMethodsHookReturn => {
  const [data, setData] = useState<PaymentMethod[]>(paymentMethods);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<PaymentMethod | null>(null);
  const [selectedRows, setSelectedRows] = useState<PaymentMethod[]>([]);

  const form = useForm<PaymentMethodSchema>({
    resolver: zodResolver(paymentMethodSchema),
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
  } = PaymentMethodsHandlers({
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

export { PaymentMethodsHook };
