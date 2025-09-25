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
import { HardwareItem } from "./components/hardaware-item/hardware-item.component";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
// Constants
import {
  DEFAULT_ITEM,
  HARDWARE_DEFAULT_ITEM,
} from "@/app/(protected)/(pages)/finance/budgets/constants/budgets.constants";
// Hooks
import { ItemHook } from "./hooks/item.hook";
// Icons
import { Eraser, Plus, Trash2 } from "lucide-react";
// Types
import type { ItemProps } from "./types/item.component.types";

const Item = ({
  architraves,
  doorFamilies,
  doorFinishes,
  doorModels,
  doorTypes,
  fieldArray,
  frames,
  hardwares,
  hardwareTypes,
  index,
}: ItemProps) => {
  const {
    architraveItems,
    control,
    doorFamilyItems,
    doorFinishItems,
    doorModelItems,
    doorTypeItems,
    frameItems,
    // getValues,
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
    // setValue,
    total,
  } = ItemHook({
    architraves,
    doorFamilies,
    doorFinishes,
    doorModels,
    doorTypes,
    fieldArray,
    frames,
    hardwares,
    index,
  });

  return (
    <div className="grid [grid-template-columns:minmax(232px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(520px,1fr)_160px_96px_80px_80px] items-start gap-2">
      <FormField
        control={control}
        name={`items.${index}.doorTypeId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[1/2] grid [grid-template-columns:64px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Tipo</FormLabel>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado tipos de hojas."
                items={doorTypeItems}
                onSearchValueChange={setSearchValueDoorType}
                onSelectedValueChange={field.onChange}
                placeholder="Tipo hoja"
                searchValue={searchValueDoorType}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage className="col-span-2" />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.doorFamilyId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[2/3] grid [grid-template-columns:64px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Familia</FormLabel>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado familias de hojas."
                items={doorFamilyItems}
                onSearchValueChange={setSearchValueDoorFamily}
                onSelectedValueChange={field.onChange}
                placeholder="Familia hoja"
                searchValue={searchValueDoorFamily}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage className="col-span-2" />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.doorModelId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[3/4] grid [grid-template-columns:64px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Modelo</FormLabel>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado modelos de hojas."
                items={doorModelItems}
                onSearchValueChange={setSearchValueDoorModel}
                onSelectedValueChange={field.onChange}
                placeholder="Modelo hoja"
                searchValue={searchValueDoorModel}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage className="col-span-2" />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.doorFinishId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[4/5] grid [grid-template-columns:64px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Acabado</FormLabel>
            <FormControl>
              <AutoComplete
                emptyMessage="No se han encontrado acabados de hojas."
                items={doorFinishItems}
                onSearchValueChange={setSearchValueDoorFinish}
                onSelectedValueChange={field.onChange}
                placeholder="Acabado hoja"
                searchValue={searchValueDoorFinish}
                selectedValue={field.value}
              />
            </FormControl>
            <FormMessage className="col-span-2" />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.glassId`}
        render={({ field }) => (
          <FormItem className="col-[2/3] row-[1/2]">
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
          <FormItem className="col-[3/4] row-[1/2]">
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
          <FormItem className="col-[4/5] row-[1/2]">
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
        name={`items.${index}.observations`}
        render={({ field }) => (
          <FormItem className="col-[2/5] row-[3/5] self-end">
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
      {hardwareFieldArray.fields.map((field, hardwareIndex) => (
        <HardwareItem
          control={control}
          hardwareFieldArray={hardwareFieldArray}
          hardwares={hardwares}
          hardwareTypes={hardwareTypes}
          index={hardwareIndex}
          key={field.id}
          parentIndex={index}
        />
      ))}
      <Button
        className="col-[5/6] w-auto self-start justify-self-start"
        onClick={() => hardwareFieldArray.append(HARDWARE_DEFAULT_ITEM)}
        type="button"
      >
        <Plus />
        Añadir herraje
      </Button>
      <FormField
        control={control}
        name={`items.${index}.height`}
        render={({ field }) => (
          <FormItem className="col-[6/7] row-[1/2] grid [grid-template-columns:56px_1fr] items-center">
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
        name={`items.${index}.width1`}
        render={({ field }) => (
          <FormItem className="col-[6/7] row-[2/3] grid [grid-template-columns:56px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Ancho 1</FormLabel>
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
        name={`items.${index}.width2`}
        render={({ field }) => (
          <FormItem className="col-[6/7] row-[3/4] grid [grid-template-columns:56px_1fr] items-center">
            <FormLabel htmlFor={field.name}>Ancho 2</FormLabel>
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
          <FormItem className="col-[6/7] row-[4/5] grid [grid-template-columns:56px_1fr] items-center">
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
      <div className="col-[8/9] row-[1/2] flex justify-end text-sm">
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(total)}
      </div>
      <div className="col-[9/10] row-[1/5] flex flex-col items-center gap-2">
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
        <Separator className="col-span-9 mt-2" />
      )}
    </div>
  );
};

export { Item };
