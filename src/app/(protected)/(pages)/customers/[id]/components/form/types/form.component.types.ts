// Types
import type { UseFormReturn } from "react-hook-form";
import type { ContactSchema } from "../../../schemas/types/contacts.schema.types";

type ContactFormProps = {
  form: UseFormReturn<ContactSchema>;
  handleSubmit: (values: ContactSchema) => void;
  label: string;
  loading: boolean;
};

export type { ContactFormProps };
