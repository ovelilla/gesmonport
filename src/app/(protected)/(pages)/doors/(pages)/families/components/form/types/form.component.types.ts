// Types
import type { UseFormReturn } from "react-hook-form";
import type { FamilySchema } from "../../../schemas/types/family.schema.types";
import type { Dispatch, SetStateAction } from "react";
import type { Model } from "../../../types/families.types";

type FamilyFormProps = {
  existingImages: string[];
  form: UseFormReturn<FamilySchema>;
  handleSubmit: (values: FamilySchema) => void;
  label: string;
  loading: boolean;
  models: Model[];
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { FamilyFormProps };
