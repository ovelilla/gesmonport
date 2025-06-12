// Types
import type { UseFormReturn } from "react-hook-form";
import type { Contact } from "../../types/contacts.types";
import type { ContactSchema } from "../../schemas/types/contact.schema.types";
import type { ContactsHandlersReturn } from "../../handlers/types/contacts.handlers.types";
import type {
  GetColumnsConfigReturn,
  GetMultipleSelectActionsReturn,
} from "../utils/types/contacts.hook.utils.types";

type ContactsHookProps = {
  contacts: Contact[];
};

type ContactsHookReturn = Omit<
  ContactsHandlersReturn,
  | "handleDelete"
  | "handleDeleteMultiple"
  | "handleEdit"
  | "handleFetch"
  | "handleResetForm"
> & {
  columns: GetColumnsConfigReturn<Contact>;
  data: Contact[];
  form: UseFormReturn<ContactSchema>;
  loading: boolean;
  multipleSelectActionsProps: GetMultipleSelectActionsReturn<Contact>;
  openAlert: boolean;
  openDialog: boolean;
  selectedRow: Contact | null;
  selectedRows: Contact[];
};

export type { ContactsHookProps, ContactsHookReturn };
