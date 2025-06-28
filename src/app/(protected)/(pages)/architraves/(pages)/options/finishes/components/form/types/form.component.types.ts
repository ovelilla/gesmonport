// Types
import type { UseFormReturn } from "react-hook-form";
import type { FinishSchema } from "../../../schemas/types/finish.schema.types";
import type { Dispatch, SetStateAction } from "react";

type FinishFormProps = {
  existingImages: string[];
  form: UseFormReturn<FinishSchema>;
  handleSubmit: (values: FinishSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { FinishFormProps };
