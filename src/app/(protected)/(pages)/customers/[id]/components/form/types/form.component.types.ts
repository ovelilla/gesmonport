// Types
import type { ContactSchema } from "../../../schemas/types/contact.schema.types";
import type { Department, Position } from "../../../types/contacts.types";
import type { UseFormReturn } from "react-hook-form";

type ContactFormProps = {
  departments: Department[];
  form: UseFormReturn<ContactSchema>;
  handleSubmit: (values: ContactSchema) => void;
  label: string;
  loading: boolean;
  positions: Position[];
};

export type { ContactFormProps };
