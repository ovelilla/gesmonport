// Components
import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multiple-selector";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
// Constants
import { DEFAULT_ITEM } from "@/app/(protected)/(pages)/finance/budgets/constants/budgets.constants";
// Hooks
import { ItemHook } from "./hooks/item.hook";
// Icons
import { Eraser, Trash2 } from "lucide-react";
// Types
import type { ItemProps } from "./types/item.component.types";

const Item = ({
  architraves,
  doors,
  fieldArray,
  frames,
  hardwares,
  index,
}: ItemProps) => {
  const {
    architraveItems,
    control,
    doorItems,
    frameItems,
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
  } = ItemHook({ architraves, doors, fieldArray, frames, hardwares, index });

  return (
    <div className="grid [grid-template-columns:minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_160px_120px_80px] items-start gap-2">
      <FormField
        control={control}
        name={`items.${index}.doorId`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado puertas."
                items={doorItems}
                onSearchValueChange={setSearchValueDoor}
                onSelectedValueChange={(value) => {
                  field.onChange(value);
                  setValue(`items.${index}.glassId`, "");
                  setSearchValueGlass("");
                }}
                placeholder="Nombre puerta"
                searchValue={searchValueDoor}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.glassId`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado vidrios."
                items={glassItems}
                onSearchValueChange={setSearchValueGlass}
                onSelectedValueChange={field.onChange}
                placeholder="Nombre vidrio"
                searchValue={searchValueGlass}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.architraveId`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado tapajuntas."
                items={architraveItems}
                onSearchValueChange={setSearchValueArchitrave}
                onSelectedValueChange={field.onChange}
                placeholder="Nombre tapajunta"
                searchValue={searchValueArchitrave}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.frameId`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado marcos."
                items={frameItems}
                onSearchValueChange={setSearchValueFrame}
                onSelectedValueChange={field.onChange}
                placeholder="Nombre marco"
                searchValue={searchValueFrame}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.architraveIds`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <MultiSelect
                {...field}
                defaultValue={field.value}
                maxCount={1}
                minWidth="160px"
                onValueChange={field.onChange}
                options={hardwareItems}
                placeholder="Selecciona"
                singleLine={true}
                variant="inverted"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.observations`}
        render={({ field }) => (
          <FormItem className="col-[1/6] row-[2/4]">
            <FormLabel htmlFor={field.name}>Observaciones</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                id={field.name}
                placeholder="Observaciones"
                value={field.value ?? ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.height`}
        render={({ field }) => (
          <FormItem className="col-[6/7] grid [grid-template-columns:48px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Alto</FormLabel>
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
      <FormField
        control={control}
        name={`items.${index}.width`}
        render={({ field }) => (
          <FormItem className="col-[6/7] grid [grid-template-columns:48px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Ancho</FormLabel>
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
      <FormField
        control={control}
        name={`items.${index}.thickness`}
        render={({ field }) => (
          <FormItem className="col-[6/7] grid [grid-template-columns:48px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Grosor</FormLabel>
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
      <FormField
        control={control}
        name={`items.${index}.quantity`}
        render={({ field }) => (
          <FormItem className="col-[7/8] row-[1/2]">
            <FormLabel className="sr-only" htmlFor={field.name}>
              Cantidad
            </FormLabel>
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
      <div className="col-[8/9] row-[1/4] flex flex-col items-center gap-2">
        <Button
          onClick={() => fieldArray.remove(index)}
          size="icon"
          type="button"
          variant="ghost"
        >
          <Trash2 />
        </Button>
        <Button
          onClick={() => fieldArray.update(index, DEFAULT_ITEM)}
          size="icon"
          type="button"
          variant="ghost"
        >
          <Eraser />
        </Button>
      </div>
      {index !== fieldArray.fields.length - 1 && (
        <Separator className="col-span-8 mt-2" />
      )}
    </div>
  );
};

export { Item };
