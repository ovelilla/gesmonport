"use client";
// Vendors
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
// Types
import type { ItemHookProps, ItemHookReturn } from "./types/item.hook.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
// Utils
import {
  getDoorExtrasTotal,
  getHardwaresTotal,
  getItemPrice,
  sumPrices,
} from "../utils/item.utils";

const ItemHook = ({
  architraveFamilies,
  architraveFinishes,
  architraveModels,
  architraveTypes,
  doorFamilies,
  doorFinishes,
  doorExtras,
  doorModels,
  doorTypes,
  // fieldArray,
  frameFamilies,
  frameFinishes,
  frameModels,
  frameTypes,
  glassFamilies,
  glassFinishes,
  glassModels,
  glassTypes,
  hardwares,
  index,
}: ItemHookProps): ItemHookReturn => {
  console.log({ glassTypes });
  const { control, getValues, setValue } = useFormContext<BudgetSchema>();

  const item = useWatch({
    control,
    name: `items.${index}`,
  }) as BudgetSchema["items"][number];

  const hardwareFieldArray = useFieldArray({
    control,
    name: `items.${index}.hardwareItems`,
  });

  const architraveFamilyPrice = getItemPrice({
    items: architraveFamilies,
    id: item.architraveFamilyId,
    height: item.height,
    width: item.width1 + item.width2,
  });
  const architraveFinishPrice = getItemPrice({
    items: architraveFinishes,
    id: item.architraveFinishId,
    height: item.height,
    width: item.width1 + item.width2,
  });
  const architraveModelPrice = getItemPrice({
    items: architraveModels,
    id: item.architraveModelId,
    height: item.height,
    width: item.width1 + item.width2,
  });
  const architraveTypePrice = getItemPrice({
    items: architraveTypes,
    id: item.architraveTypeId,
    height: item.height,
    width: item.width1 + item.width2,
  });
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
  const frameFamilyPrice = getItemPrice({
    items: frameFamilies,
    id: item.frameFamilyId,
    height: item.height,
    width: item.width1 + item.width2,
  });
  const frameFinishPrice = getItemPrice({
    items: frameFinishes,
    id: item.frameFinishId,
    height: item.height,
    width: item.width1 + item.width2,
  });
  const frameModelPrice = getItemPrice({
    items: frameModels,
    id: item.frameModelId,
    height: item.height,
    width: item.width1 + item.width2,
  });
  const frameTypePrice = getItemPrice({
    items: frameTypes,
    id: item.frameTypeId,
    height: item.height,
    width: item.width1 + item.width2,
  });
  const glassFamilyPrice1 = getItemPrice({
    items: glassFamilies,
    id: item.glassFamilyId,
    height: item.height,
    width: item.width1,
  });
  const glassFinishPrice1 = getItemPrice({
    items: glassFinishes,
    id: item.glassFinishId,
    height: item.height,
    width: item.width1,
  });
  const glassModelPrice1 = getItemPrice({
    items: glassModels,
    id: item.glassModelId,
    height: item.height,
    width: item.width1,
  });
  const glassTypePrice1 = getItemPrice({
    items: glassTypes,
    id: item.glassTypeId,
    height: item.height,
    width: item.width1,
  });
  const glassFamilyPrice2 = getItemPrice({
    items: glassFamilies,
    id: item.glassFamilyId,
    height: item.height,
    width: item.width2,
  });
  const glassFinishPrice2 = getItemPrice({
    items: glassFinishes,
    id: item.glassFinishId,
    height: item.height,
    width: item.width2,
  });
  const glassModelPrice2 = getItemPrice({
    items: glassModels,
    id: item.glassModelId,
    height: item.height,
    width: item.width2,
  });
  const glassTypePrice2 = getItemPrice({
    items: glassTypes,
    id: item.glassTypeId,
    height: item.height,
    width: item.width2,
  });

  const hardwaresTotal = getHardwaresTotal({
    hardwareItems: item.hardwareItems,
    hardwares,
  });
  console.log({ hardwaresTotal });

  const doorExtrasTotal = getDoorExtrasTotal({
    doorExtraIds: item.doorExtras,
    doorExtras,
  });

  const subtotal = sumPrices(
    architraveFamilyPrice,
    architraveFinishPrice,
    architraveModelPrice,
    architraveTypePrice,
    doorFamilyPrice1,
    doorFinishPrice1,
    doorModelPrice1,
    doorTypePrice1,
    doorFamilyPrice2,
    doorFinishPrice2,
    doorExtrasTotal,
    doorModelPrice2,
    doorTypePrice2,
    frameFamilyPrice,
    frameFinishPrice,
    frameModelPrice,
    frameTypePrice,
    glassFamilyPrice1,
    glassFinishPrice1,
    glassModelPrice1,
    glassTypePrice1,
    glassFamilyPrice2,
    glassFinishPrice2,
    glassModelPrice2,
    glassTypePrice2,
    hardwaresTotal,
  );

  const total = subtotal * (item.quantity ?? 0);

  return {
    control,
    hardwareFieldArray,
    total,
  };
};

export { ItemHook };
