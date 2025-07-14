// Types
import type { Family, Finish, Model, Type } from "../../../types/glass.types";
import type { UseFormReturn } from "react-hook-form";
import type { GlassSchema } from "../../../schemas/types/glass.schema.types";
import type { Dispatch, SetStateAction } from "react";

type GlassFormProps = {
  existingImages: string[];
  families: Family[];
  finishes: Finish[];
  form: UseFormReturn<GlassSchema>;
  handleSubmit: (values: GlassSchema) => void;
  label: string;
  loading: boolean;
  models: Model[];
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  types: Type[];
  toDelete: string[];
};

export type { GlassFormProps };
