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
import { MultiSelect } from "@/components/ui/multiple-selector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  architraveFamilies,
  architraveFinishes,
  architraveModels,
  architraveTypes,
  doorExtras,
  doorFamilies,
  doorFinishes,
  doorModels,
  doorTypes,
  fieldArray,
  frameFamilies,
  frameFinishes,
  frameModels,
  frameTypes,
  glassFamilies,
  glassFinishes,
  glassModels,
  glassTypes,
  hardwares,
  hardwareTypes,
  index,
}: ItemProps) => {
  const { control, hardwareFieldArray, total } = ItemHook({
    architraveFamilies,
    architraveFinishes,
    architraveModels,
    architraveTypes,
    doorFamilies,
    doorFinishes,
    doorExtras,
    doorModels,
    doorTypes,
    fieldArray,
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
  });

  return (
    <div className="w- grid grid-cols-[minmax(176px,1fr)_minmax(176px,1fr)_minmax(176px,1fr)_minmax(176px,1fr)_minmax(520px,1fr)_160px_96px_80px_80px] items-start gap-x-4 gap-y-2">
      <FormField
        control={control}
        name={`items.${index}.doorTypeId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[1/2]">
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Tipo hoja" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {doorTypes.map((doorType) => (
                  <SelectItem key={doorType.id} value={doorType.id}>
                    {doorType.name}
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
        name={`items.${index}.doorFamilyId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[2/3]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Familia hoja" />
                </SelectTrigger>
                <SelectContent>
                  {doorFamilies.map((doorFamily) => (
                    <SelectItem key={doorFamily.id} value={doorFamily.id}>
                      {doorFamily.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.doorModelId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[3/4]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Modelo hoja" />
                </SelectTrigger>
                <SelectContent>
                  {doorModels.map((doorModel) => (
                    <SelectItem key={doorModel.id} value={doorModel.id}>
                      {doorModel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.doorFinishId`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[4/5]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Acabado hoja" />
                </SelectTrigger>
                <SelectContent>
                  {doorFinishes.map((doorFinish) => (
                    <SelectItem key={doorFinish.id} value={doorFinish.id}>
                      {doorFinish.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.doorExtras`}
        render={({ field }) => (
          <FormItem className="col-[1/2] row-[5/6]">
            <FormControl>
              <MultiSelect
                {...field}
                defaultValue={field.value}
                onValueChange={field.onChange}
                options={doorExtras.map((doorExtra) => ({
                  label: doorExtra.name,
                  value: doorExtra.id,
                }))}
                placeholder="Extras hoja"
                singleLine
                variant="inverted"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.glassTypeId`}
        render={({ field }) => (
          <FormItem className="col-[2/3] row-[1/2]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Tipo vidrio" />
                </SelectTrigger>
                <SelectContent>
                  {glassTypes.map((glassType) => (
                    <SelectItem key={glassType.id} value={glassType.id}>
                      {glassType.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.glassFamilyId`}
        render={({ field }) => (
          <FormItem className="col-[2/3] row-[2/3]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Familia vidrio" />
                </SelectTrigger>
                <SelectContent>
                  {glassFamilies.map((glassFamily) => (
                    <SelectItem key={glassFamily.id} value={glassFamily.id}>
                      {glassFamily.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.glassModelId`}
        render={({ field }) => (
          <FormItem className="col-[2/3] row-[3/4]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Modelo vidrio" />
                </SelectTrigger>
                <SelectContent>
                  {glassModels.map((glassModel) => (
                    <SelectItem key={glassModel.id} value={glassModel.id}>
                      {glassModel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.glassFinishId`}
        render={({ field }) => (
          <FormItem className="col-[2/3] row-[4/5]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Acabado vidrio" />
                </SelectTrigger>
                <SelectContent>
                  {glassFinishes.map((glassFinish) => (
                    <SelectItem key={glassFinish.id} value={glassFinish.id}>
                      {glassFinish.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.architraveTypeId`}
        render={({ field }) => (
          <FormItem className="col-[3/4] row-[1/2]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Tipo tapajuntas" />
                </SelectTrigger>
                <SelectContent>
                  {architraveTypes.map((architraveType) => (
                    <SelectItem
                      key={architraveType.id}
                      value={architraveType.id}
                    >
                      {architraveType.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.architraveFamilyId`}
        render={({ field }) => (
          <FormItem className="col-[3/4] row-[2/3]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Familia tapajuntas" />
                </SelectTrigger>
                <SelectContent>
                  {architraveFamilies.map((architraveFamily) => (
                    <SelectItem
                      key={architraveFamily.id}
                      value={architraveFamily.id}
                    >
                      {architraveFamily.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.architraveModelId`}
        render={({ field }) => (
          <FormItem className="col-[3/4] row-[3/4]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Modelo tapajuntas" />
                </SelectTrigger>
                <SelectContent>
                  {architraveModels.map((architraveModel) => (
                    <SelectItem
                      key={architraveModel.id}
                      value={architraveModel.id}
                    >
                      {architraveModel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.architraveFinishId`}
        render={({ field }) => (
          <FormItem className="col-[3/4] row-[4/5]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Acabado tapajuntas" />
                </SelectTrigger>
                <SelectContent>
                  {architraveFinishes.map((architraveFinish) => (
                    <SelectItem
                      key={architraveFinish.id}
                      value={architraveFinish.id}
                    >
                      {architraveFinish.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.frameTypeId`}
        render={({ field }) => (
          <FormItem className="col-[4/5] row-[1/2]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Tipo marco" />
                </SelectTrigger>
                <SelectContent>
                  {frameTypes.map((frameType) => (
                    <SelectItem key={frameType.id} value={frameType.id}>
                      {frameType.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.frameFamilyId`}
        render={({ field }) => (
          <FormItem className="col-[4/5] row-[2/3]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Familia marco" />
                </SelectTrigger>
                <SelectContent>
                  {frameFamilies.map((frameFamily) => (
                    <SelectItem key={frameFamily.id} value={frameFamily.id}>
                      {frameFamily.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.frameModelId`}
        render={({ field }) => (
          <FormItem className="col-[4/5] row-[3/4]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Modelo marco" />
                </SelectTrigger>
                <SelectContent>
                  {frameModels.map((frameModel) => (
                    <SelectItem key={frameModel.id} value={frameModel.id}>
                      {frameModel.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.frameFinishId`}
        render={({ field }) => (
          <FormItem className="col-[4/5] row-[4/5]">
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id={field.name}
                  aria-labelledby={field.name}
                  onReset={() => field.onChange("")}
                  value={field.value}
                >
                  <SelectValue placeholder="Acabado marco" />
                </SelectTrigger>
                <SelectContent>
                  {frameFinishes.map((frameFinish) => (
                    <SelectItem key={frameFinish.id} value={frameFinish.id}>
                      {frameFinish.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`items.${index}.observations`}
        render={({ field }) => (
          <FormItem className="col-[1/5] row-[6/7] self-end">
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
          <FormItem className="col-[6/7] row-[1/2] grid grid-cols-[56px_1fr] items-center">
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
          <FormItem className="col-[6/7] row-[2/3] grid grid-cols-[56px_1fr] items-center">
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
          <FormItem className="col-[6/7] row-[3/4] grid grid-cols-[56px_1fr] items-center">
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
          <FormItem className="col-[6/7] row-[4/5] grid grid-cols-[56px_1fr] items-center">
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
                step={1}
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
