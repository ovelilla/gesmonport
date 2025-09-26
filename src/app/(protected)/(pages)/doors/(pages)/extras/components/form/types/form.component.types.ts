// Types
import type { UseFormReturn } from "react-hook-form";
import type { ExtraSchema } from "../../../schemas/types/extras.schema.types";
import type { Dispatch, SetStateAction } from "react";

type ExtraFormProps = {
  existingImages: string[];
  form: UseFormReturn<ExtraSchema>;
  handleSubmit: (values: ExtraSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { ExtraFormProps };
