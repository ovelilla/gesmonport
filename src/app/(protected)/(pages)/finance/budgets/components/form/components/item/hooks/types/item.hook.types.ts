// Types
import type { Dispatch, SetStateAction } from "react";
import type {
  Architrave,
  Door,
  Frame,
  Hardware,
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type {
  Control,
  FieldValues,
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
  architraves: Architrave[];
  doors: Door[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frames: Frame[];
  hardwares: Hardware[];
  index: number;
};

type ItemHookReturn = {
  architraveItems: AutocompleteItem[];
  control: Control<FieldValues, unknown, FieldValues>;
  doorItems: AutocompleteItem[];
  frameItems: AutocompleteItem[];
  getValues: UseFormGetValues<FieldValues>;
  glassItems: AutocompleteItem[];
  hardwareItems: AutocompleteItem[];
  searchValueArchitrave: string;
  searchValueDoor: string;
  searchValueFrame: string;
  searchValueGlass: string;
  setSearchValueArchitrave: Dispatch<SetStateAction<string>>;
  setSearchValueDoor: Dispatch<SetStateAction<string>>;
  setSearchValueFrame: Dispatch<SetStateAction<string>>;
  setSearchValueGlass: Dispatch<SetStateAction<string>>;
  setValue: UseFormSetValue<FieldValues>;
};

export type { ItemHookProps, ItemHookReturn };
