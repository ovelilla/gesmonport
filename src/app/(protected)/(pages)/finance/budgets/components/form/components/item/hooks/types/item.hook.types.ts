// Types
import type { Dispatch, SetStateAction } from "react";
import type {
  Architrave,
  DoorFamily,
  DoorFinish,
  DoorModel,
  DoorType,
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
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frames: Frame[];
  hardwares: Hardware[];
  index: number;
};

type ItemHookReturn = {
  architraveItems: AutocompleteItem[];
  control: Control<FieldValues, unknown, FieldValues>;
  doorFamilyItems: AutocompleteItem[];
  doorFinishItems: AutocompleteItem[];
  doorModelItems: AutocompleteItem[];
  doorTypeItems: AutocompleteItem[];
  frameItems: AutocompleteItem[];
  getValues: UseFormGetValues<FieldValues>;
  glassItems: AutocompleteItem[];
  hardwareItems: AutocompleteItem[];
  searchValueArchitrave: string;
  searchValueDoorFamily: string;
  searchValueDoorFinish: string;
  searchValueDoorModel: string;
  searchValueDoorType: string;
  searchValueFrame: string;
  searchValueGlass: string;
  setSearchValueArchitrave: Dispatch<SetStateAction<string>>;
  setSearchValueDoorFamily: Dispatch<SetStateAction<string>>;
  setSearchValueDoorFinish: Dispatch<SetStateAction<string>>;
  setSearchValueDoorModel: Dispatch<SetStateAction<string>>;
  setSearchValueDoorType: Dispatch<SetStateAction<string>>;
  setSearchValueFrame: Dispatch<SetStateAction<string>>;
  setSearchValueGlass: Dispatch<SetStateAction<string>>;
  setValue: UseFormSetValue<FieldValues>;
  total: number;
};

export type { AutocompleteItem, ItemHookProps, ItemHookReturn };
