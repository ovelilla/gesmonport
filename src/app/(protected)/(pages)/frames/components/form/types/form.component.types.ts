// Types
import type { Family, Finish, Type } from "../../../types/frames.types";
import type { UseFormReturn } from "react-hook-form";
import type { FrameSchema } from "../../../schemas/types/frame.schema.types";
import type { Dispatch, SetStateAction } from "react";

type FrameFormProps = {
  existingImages: string[];
  families: Family[];
  finishes: Finish[];
  form: UseFormReturn<FrameSchema>;
  handleSubmit: (values: FrameSchema) => void;
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  types: Type[];
  toDelete: string[];
};

export type { FrameFormProps };
