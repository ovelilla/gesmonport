// Types
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Contact } from "../../types/contacts.types";
import type { ContactSchema } from "../../schemas/types/contact.schema.types";

type ContactsHandlersProps = {
  form: UseFormReturn<ContactSchema>;
  params: { id: string };
  selectedRow: Contact | null;
  selectedRows: Contact[];
  setData: Dispatch<SetStateAction<Contact[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Contact | null>>;
  setSelectedRows: Dispatch<SetStateAction<Contact[]>>;
};

type ContactsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Contact) => void;
  handleDeleteMultiple: (rows: Contact[]) => void;
  handleEdit: (row: Contact) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: ContactSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<ContactsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  ContactsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Contact };

type DeleteMultipleHandlerProps = Pick<
  ContactsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Contact[];
};

type EditHandlerProps = Pick<
  ContactsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Contact;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  ContactsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  ContactsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "params" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  ContactsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  ContactsHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  ContactsHandlersProps,
  | "form"
  | "params"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: ContactSchema;
};

export type {
  ContactsHandlersProps,
  ContactsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
