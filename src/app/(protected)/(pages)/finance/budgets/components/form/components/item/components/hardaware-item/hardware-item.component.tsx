// Components
import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Hooks
import { HardwareItemHook } from "./hooks/hardware-item.hook";
// Icons
import { Trash2 } from "lucide-react";
// Types
import type { HardwareItemProps } from "./types/hardware-item.component.types";

const HardwareItem = ({
  control,
  hardwareFieldArray,
  hardwares,
  hardwareTypes,
  index,
  parentIndex,
}: HardwareItemProps) => {
  const {
    availableHardwareTypes,
    hardwareItemsFiltered,
    searchValueHardware,
    setSearchValueHardware,
  } = HardwareItemHook({
    control,
    hardwares,
    hardwareTypes,
    index,
    parentIndex,
  });

  return (
    <div className="col-[5/6] grid [grid-template-columns:minmax(160px,1fr)_minmax(160px,1fr)_96px_80px] gap-2">
      <FormField
        control={control}
        name={`items.${parentIndex}.hardwareItems.${index}.typeId`}
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger id={field.name} aria-labelledby={field.name}>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {availableHardwareTypes.map((hardwareType) => (
                  <SelectItem key={hardwareType.id} value={hardwareType.id}>
                    {hardwareType.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${parentIndex}.hardwareItems.${index}.hardwareId`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado herrajes."
                items={hardwareItemsFiltered}
                onSearchValueChange={setSearchValueHardware}
                onSelectedValueChange={field.onChange}
                placeholder="Nombre herraje"
                searchValue={searchValueHardware}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${parentIndex}.hardwareItems.${index}.quantity`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                id={field.name}
                inputMode="decimal"
                max={999999}
                min={0}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    field.onChange(0);
                  }
                  field.onBlur();
                }}
                onChange={(event) => {
                  const v = event.target.value;
                  field.onChange(v === "" ? "" : Number(v));
                }}
                onFocus={() => {
                  if (field.value === 0) {
                    field.onChange("");
                  }
                }}
                placeholder="Ej: 10"
                step={0.01}
                type="number"
              />
            </FormControl>
            <FormMessage className="col-span-2" />
          </FormItem>
        )}
      />

      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={() => hardwareFieldArray.remove(index)}
          size="icon"
          type="button"
          variant="ghost"
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export { HardwareItem };
