"use client";
// Vendors
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
// Types
import type { ItemHookProps, ItemHookReturn } from "./types/item.hook.types";

const ItemHook = ({
  architraves,
  doors,
  // fieldArray,
  frames,
  hardwares,
  index,
}: ItemHookProps): ItemHookReturn => {
  const [searchValueArchitrave, setSearchValueArchitrave] =
    useState<string>("");
  const [searchValueDoor, setSearchValueDoor] = useState<string>("");
  const [searchValueFrame, setSearchValueFrame] = useState<string>("");
  const [searchValueGlass, setSearchValueGlass] = useState<string>("");

  const { control, getValues, setValue } = useFormContext();

  const items = useWatch({ name: `items.${index}`, control });

  const architraveItems = architraves.map((architrave) => ({
    value: architrave.id,
    label: architrave.name,
  }));

  const doorItems = doors.map((door) => ({
    value: door.id,
    label: door.name,
  }));

  const frameItems = frames.map((frame) => ({
    value: frame.id,
    label: frame.name,
  }));

  const glassItems =
    doors
      .find((door) => door.id === items.doorId)
      ?.glass.map((g) => ({
        value: g.id,
        label: g.name,
      })) ?? [];

  const hardwareItems = hardwares.map((hardware) => ({
    value: hardware.id,
    label: hardware.name,
  }));

  return {
    architraveItems,
    control,
    doorItems,
    frameItems,
    getValues,
    glassItems,
    hardwareItems,
    searchValueArchitrave,
    searchValueDoor,
    searchValueFrame,
    searchValueGlass,
    setSearchValueArchitrave,
    setSearchValueDoor,
    setSearchValueFrame,
    setSearchValueGlass,
    setValue,
  };
};

export { ItemHook };
