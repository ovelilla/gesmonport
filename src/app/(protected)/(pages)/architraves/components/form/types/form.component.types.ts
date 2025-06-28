// Types
import type { Family, Finish, Type } from "../../../types/architraves.types";
import type { UseFormReturn } from "react-hook-form";
import type { ArchitraveSchema } from "../../../schemas/types/architrave.schema.types";
import type { Dispatch, SetStateAction } from "react";

type ArchitraveFormProps = {
  existingImages: string[];
  families: Family[];
  finishes: Finish[];
  form: UseFormReturn<ArchitraveSchema>;
  handleSubmit: (values: ArchitraveSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  types: Type[];
  toDelete: string[];
};

export type { ArchitraveFormProps };
