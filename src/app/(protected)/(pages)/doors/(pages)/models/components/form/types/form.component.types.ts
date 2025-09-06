// Types
import type { UseFormReturn } from "react-hook-form";
import type { ModelSchema } from "../../../schemas/types/models.schema.types";
import type { Dispatch, SetStateAction } from "react";

type ModelFormProps = {
  existingImages: string[];
  form: UseFormReturn<ModelSchema>;
  handleSubmit: (values: ModelSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { ModelFormProps };
