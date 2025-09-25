// Vendors
import { useState, useMemo } from "react";
import { useWatch } from "react-hook-form";
// Types
import type {
  HardwareItemHookProps,
  HardwareItemHookReturn,
} from "./types/hardware-item.hook.types";

const HardwareItemHook = ({
  control,
  hardwares,
  hardwareTypes,
  index,
  parentIndex,
}: HardwareItemHookProps): HardwareItemHookReturn => {
  const [searchValueHardware, setSearchValueHardware] = useState("");

  const hardwareItems =
    useWatch({
      control,
      name: `items.${parentIndex}.hardwareItems`,
    }) ?? [];

  const currentTypeId = hardwareItems[index]?.typeId;

  const selectedTypeIds = hardwareItems
    .map((item) => item.typeId)
    .filter(Boolean);

  const availableHardwareTypes = hardwareTypes.filter(
    (ht) => !selectedTypeIds.includes(ht.id) || ht.id === currentTypeId,
  );

  const hardwareItemsFiltered = useMemo(() => {
    if (!currentTypeId) return [];
    return hardwares
      .filter((hw) => hw.typeId === currentTypeId)
      .map((hw) => ({
        value: hw.id,
        label: hw.name,
      }));
  }, [hardwares, currentTypeId]);

  return {
    availableHardwareTypes,
    currentTypeId,
    hardwareItemsFiltered,
    searchValueHardware,
    setSearchValueHardware,
  };
};

export { HardwareItemHook };
