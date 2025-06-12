// Types
import type {
  Contact,
  Customer,
  Department,
  Position,
} from "../../types/contacts.types";
import type { ContactSchema } from "../../schemas/types/contact.schema.types";

type CreateContactProps = {
  id: string;
  values: ContactSchema;
};

type CreateContactReturn = {
  contact?: Contact;
  error?: string;
  success?: string;
};

type DeleteContactProps = {
  id: string;
};

type DeleteContactReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleContactsProps = {
  ids: string[];
};

type DeleteMultipleContactsReturn = {
  success?: string;
  error?: string;
};

type ReadCustomerProps = {
  id: string;
};

type ReadCustomerReturn = Customer | null;

type ReadContactsReturn = Contact[];

type ReadContactsProps = {
  id: string;
};

type ReadDepartmentsReturn = Department[];

type ReadPositionsReturn = Position[];

type UpdateContactProps = {
  id: string;
  values: ContactSchema;
};

type UpdateContactReturn = {
  contact?: Contact;
  error?: string;
  success?: string;
};

export type {
  CreateContactProps,
  CreateContactReturn,
  DeleteContactProps,
  DeleteContactReturn,
  DeleteMultipleContactsProps,
  DeleteMultipleContactsReturn,
  ReadCustomerProps,
  ReadCustomerReturn,
  ReadContactsProps,
  ReadContactsReturn,
  ReadDepartmentsReturn,
  ReadPositionsReturn,
  UpdateContactProps,
  UpdateContactReturn,
};
