// Types
import type { UseFormReturn } from "react-hook-form";
import type { TypeSchema } from "../../../schemas/types/type.schema.types";
import type { Dispatch, SetStateAction } from "react";

type TypeFormProps = {
  existingImages: string[];
  form: UseFormReturn<TypeSchema>;
  handleSubmit: (values: TypeSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { TypeFormProps };
