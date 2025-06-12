import {
  Customer,
  Contact,
  Department,
  Position,
} from "../types/contacts.types";

type ContactsProps = {
  customer: Customer | null;
  contacts: Contact[];
  departments: Department[];
  positions: Position[];
};

export type { ContactsProps };
