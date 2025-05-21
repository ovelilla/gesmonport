"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_FORM_VALUES } from "../constants/contacts.constants";
// Handlers
import { ContactsHandlers } from "../handlers/contacts.handlers";
// Schemas
import { contactSchema } from "../schemas/contact.schema";
// Types
import type { Contact } from "../types/contacts.types";
import type { ContactSchema } from "../schemas/types/contact.schema.types";
import type {
  ContactsHookProps,
  ContactsHookReturn,
} from "./types/contacts.hook.types";
// Utils
import {
  getColumnsConfig,
  getMultipleSelectActionsProps,
} from "./utils/contacts.hook.utils";

const ContactsHook = ({ contacts }: ContactsHookProps): ContactsHookReturn => {
  const [data, setData] = useState<Contact[]>(contacts);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<Contact | null>(null);
  const [selectedRows, setSelectedRows] = useState<Contact[]>([]);

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const params = useParams<{ id: string }>();

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
  } = ContactsHandlers({
    form,
    params,
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

export { ContactsHook };
