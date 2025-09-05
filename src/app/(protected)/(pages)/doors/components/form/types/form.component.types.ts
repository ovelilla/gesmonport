// Types
import type { Family, Finish, Glass, Type } from "../../../types/doors.types";
import type { UseFormReturn } from "react-hook-form";
import type { DoorSchema } from "../../../schemas/types/door.schema.types";
import type { Dispatch, SetStateAction } from "react";

type DoorFormProps = {
  existingImages: string[];
  families: Family[];
  finishes: Finish[];
  form: UseFormReturn<DoorSchema>;
  glass: Glass[];
  handleSubmit: (values: DoorSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  types: Type[];
  toDelete: string[];
};

export type { DoorFormProps };
