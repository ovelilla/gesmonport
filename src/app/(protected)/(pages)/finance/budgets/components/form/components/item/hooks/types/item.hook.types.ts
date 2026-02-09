// Types
import type { Dispatch, SetStateAction } from "react";
import type {
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveModel,
  ArchitraveType,
  DoorExtra,
  DoorFamily,
  DoorFinish,
  DoorModel,
  DoorType,
  FrameFamily,
  FrameFinish,
  FrameModel,
  FrameType,
  GlassFamily,
  GlassFinish,
  GlassModel,
  GlassType,
  Hardware,
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type {
  Control,
  UseFieldArrayReturn,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";

type AutocompleteItem = {
  value: string;
  label: string;
};

type ItemHookProps = {
  architraveFamilies: ArchitraveFamily[];
  architraveFinishes: ArchitraveFinish[];
  architraveModels: ArchitraveModel[];
  architraveTypes: ArchitraveType[];
  doorExtras: DoorExtra[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frameFamilies: FrameFamily[];
  frameFinishes: FrameFinish[];
  frameModels: FrameModel[];
  frameTypes: FrameType[];
  glassFamilies: GlassFamily[];
  glassFinishes: GlassFinish[];
  glassModels: GlassModel[];
  glassTypes: GlassType[];
  hardwares: Hardware[];
  index: number;
};

type ItemHookReturn = {
  control: Control<BudgetSchema>;
  hardwareFieldArray: UseFieldArrayReturn<
    BudgetSchema,
    `items.${number}.hardwareItems`
  >;
  total: number;
};

export type { AutocompleteItem, ItemHookProps, ItemHookReturn };
