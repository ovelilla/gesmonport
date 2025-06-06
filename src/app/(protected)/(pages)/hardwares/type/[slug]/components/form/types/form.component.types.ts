// Types
import type { UseFormReturn } from "react-hook-form";
import type { DoorType, HardwareFinish } from "../../../types/hardware.types";
import type { HardwareSchema } from "../../../schemas/types/hardware.schema.types";
import type { Dispatch, SetStateAction } from "react";

type HardwareFormProps = {
  doorTypes: DoorType[];
  existingImages: string[];
  form: UseFormReturn<HardwareSchema>;
  handleSubmit: (values: HardwareSchema) => void;
  hardwaresFinishes: HardwareFinish[];
  label: string;
  loading: boolean;
  newImages: File[];
  setExistingImages: Dispatch<SetStateAction<string[]>>;
  setNewImages: Dispatch<SetStateAction<File[]>>;
  setToDelete: Dispatch<SetStateAction<string[]>>;
  toDelete: string[];
};

export type { HardwareFormProps };
