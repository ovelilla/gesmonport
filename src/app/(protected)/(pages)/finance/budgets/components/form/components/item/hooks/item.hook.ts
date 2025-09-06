"use client";
// Vendors
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
// Types
import type {
  AutocompleteItem,
  ItemHookProps,
  ItemHookReturn,
} from "./types/item.hook.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
// Utils
import { getItemPrice, sumPrices, toSelectItems } from "../utils/item.utils";

const ItemHook = ({
  architraves,
  doorFamilies,
  doorFinishes,
  doorModels,
  doorTypes,
  // fieldArray,
  frames,
  hardwares,
  index,
}: ItemHookProps): ItemHookReturn => {
  const [searchValueArchitrave, setSearchValueArchitrave] =
    useState<string>("");
  const [searchValueDoorFamily, setSearchValueDoorFamily] =
    useState<string>("");
  const [searchValueDoorFinish, setSearchValueDoorFinish] =
    useState<string>("");
  const [searchValueDoorModel, setSearchValueDoorModel] = useState<string>("");
  const [searchValueDoorType, setSearchValueDoorType] = useState<string>("");
  const [searchValueFrame, setSearchValueFrame] = useState<string>("");
  const [searchValueGlass, setSearchValueGlass] = useState<string>("");

  const { control, getValues, setValue } = useFormContext();

  const item = useWatch({
    control,
    name: `items.${index}`,
  }) as BudgetSchema["items"][number];

  const architraveItems = toSelectItems({ items: architraves });
  const doorFamilyItems = toSelectItems({ items: doorFamilies });
  const doorFinishItems = toSelectItems({ items: doorFinishes });
  const doorModelItems = toSelectItems({ items: doorModels });
  const doorTypeItems = toSelectItems({ items: doorTypes });
  const frameItems = toSelectItems({ items: frames });
  const glassItems: AutocompleteItem[] = [];
  const hardwareItems = toSelectItems({ items: hardwares });

  const doorFamilyPrice = getItemPrice({
    items: doorFamilies,
    id: item.doorFamilyId,
    height: item.height,
    width: item.width,
  });
  const doorFinishPrice = getItemPrice({
    items: doorFinishes,
    id: item.doorFinishId,
    height: item.height,
    width: item.width,
  });
  const doorModelPrice = getItemPrice({
    items: doorModels,
    id: item.doorModelId,
    height: item.height,
    width: item.width,
  });
  const doorTypePrice = getItemPrice({
    items: doorTypes,
    id: item.doorTypeId,
    height: item.height,
    width: item.width,
  });

  const total = sumPrices(
    doorFamilyPrice,
    doorFinishPrice,
    doorModelPrice,
    doorTypePrice,
  );

  //   doors
  //     .find((door) => door.id === items.doorId)
  //     ?.glass.map((g) => ({
  //       value: g.id,
  //       label: g.name,
  //     })) ?? [];

  return {
    architraveItems,
    control,
    doorFamilyItems,
    doorFinishItems,
    doorModelItems,
    doorTypeItems,
    frameItems,
    getValues,
    glassItems,
    hardwareItems,
    searchValueArchitrave,
    searchValueDoorFamily,
    searchValueDoorFinish,
    searchValueDoorModel,
    searchValueDoorType,
    searchValueFrame,
    searchValueGlass,
    setSearchValueArchitrave,
    setSearchValueDoorFamily,
    setSearchValueDoorFinish,
    setSearchValueDoorModel,
    setSearchValueDoorType,
    setSearchValueFrame,
    setSearchValueGlass,
    setValue,
    total,
  };
};

export { ItemHook };
