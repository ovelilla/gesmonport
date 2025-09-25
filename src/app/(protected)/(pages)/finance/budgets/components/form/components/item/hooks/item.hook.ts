"use client";
// Vendors
import { useState } from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
// Types
import type {
  AutocompleteItem,
  ItemHookProps,
  ItemHookReturn,
} from "./types/item.hook.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
// Utils
import {
  getHardwareTotal,
  getItemPrice,
  sumPrices,
  toSelectItems,
  toSelectItemsFromRelation,
} from "../utils/item.utils";

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
  const [searchValueArchitrave, setSearchValueArchitrave] = useState("");
  const [searchValueDoorFamily, setSearchValueDoorFamily] = useState("");
  const [searchValueDoorFinish, setSearchValueDoorFinish] = useState("");
  const [searchValueDoorModel, setSearchValueDoorModel] = useState("");
  const [searchValueDoorType, setSearchValueDoorType] = useState("");
  const [searchValueFrame, setSearchValueFrame] = useState("");
  const [searchValueGlass, setSearchValueGlass] = useState("");

  const { control, getValues, setValue } = useFormContext<BudgetSchema>();

  const item = useWatch({
    control,
    name: `items.${index}`,
  }) as BudgetSchema["items"][number];

  console.log("Item Hook Render", item);

  const hardwareFieldArray = useFieldArray({
    control,
    name: `items.${index}.hardwareItems`,
  });

  const architraveItems = toSelectItems({ items: architraves });
  const doorFamilyItems = toSelectItemsFromRelation({
    items: doorTypes,
    parentId: item.doorTypeId,
    relationKey: "families",
  });
  const doorFinishItems = toSelectItemsFromRelation({
    items: doorModels,
    parentId: item.doorModelId,
    relationKey: "finishes",
  });
  const doorModelItems = toSelectItemsFromRelation({
    items: doorFamilies,
    parentId: item.doorFamilyId,
    relationKey: "models",
  });
  const doorTypeItems = toSelectItems({ items: doorTypes });
  const frameItems = toSelectItems({ items: frames });
  const glassItems: AutocompleteItem[] = [];

  const doorFamilyPrice1 = getItemPrice({
    items: doorFamilies,
    id: item.doorFamilyId,
    height: item.height,
    width: item.width1,
  });
  const doorFinishPrice1 = getItemPrice({
    items: doorFinishes,
    id: item.doorFinishId,
    height: item.height,
    width: item.width1,
  });
  const doorModelPrice1 = getItemPrice({
    items: doorModels,
    id: item.doorModelId,
    height: item.height,
    width: item.width1,
  });
  const doorTypePrice1 = getItemPrice({
    items: doorTypes,
    id: item.doorTypeId,
    height: item.height,
    width: item.width1,
  });
  const doorFamilyPrice2 = getItemPrice({
    items: doorFamilies,
    id: item.doorFamilyId,
    height: item.height,
    width: item.width2,
  });
  const doorFinishPrice2 = getItemPrice({
    items: doorFinishes,
    id: item.doorFinishId,
    height: item.height,
    width: item.width2,
  });
  const doorModelPrice2 = getItemPrice({
    items: doorModels,
    id: item.doorModelId,
    height: item.height,
    width: item.width2,
  });
  const doorTypePrice2 = getItemPrice({
    items: doorTypes,
    id: item.doorTypeId,
    height: item.height,
    width: item.width2,
  });

  const hardwareTotal = getHardwareTotal({
    hardwareItems: item.hardwareItems,
    hardwares,
  });

  const subtotal = sumPrices(
    doorFamilyPrice1,
    doorFinishPrice1,
    doorModelPrice1,
    doorTypePrice1,
    doorFamilyPrice2,
    doorFinishPrice2,
    doorModelPrice2,
    doorTypePrice2,
    hardwareTotal,
  );

  const total = subtotal * (item.quantity ?? 0);

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
    hardwareFieldArray,
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
