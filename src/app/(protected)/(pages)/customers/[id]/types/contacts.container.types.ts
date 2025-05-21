import { Customer, Contact } from "./contacts.types";

type ContactsProps = {
  customer: Customer | null;
  contacts: Contact[];
};

export type { ContactsProps };
