// Vendors
import Image from "next/image";
// Components
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multiple-selector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// Icons
import { X } from "lucide-react";
// Types
import type { HardwareFormProps } from "./types/form.component.types";

const HardwareForm = ({
  doorTypes,
  existingImages,
  form,
  handleSubmit,
  hardwaresFinishes,
  label,
  loading,
  newImages,
  setExistingImages,
  setNewImages,
  setToDelete,
  toDelete,
}: HardwareFormProps) => (
  <Form {...form}>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        form.setValue("images", [...existingImages, ...newImages]);
        form.handleSubmit((values) => {
          handleSubmit(values);
        })();
      }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Nombre</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Nombre"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Descripción"
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Referencia</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Referencia"
                  type="text"
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>Precio</FormLabel>
                <FormControl>
                  <div className="relative grow basis-1/2">
                    <Input
                      {...field}
                      disabled={loading}
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
                    <span className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-sm">
                      €
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="finishId"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>Acabado</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value ?? ""}
                >
                  <FormControl>
                    <SelectTrigger
                      id="paymentMethodId"
                      aria-labelledby="paymentMethodId"
                    >
                      <SelectValue placeholder="Selecciona una forma de pago" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {hardwaresFinishes.map((finish) => (
                      <SelectItem key={finish.id} value={finish.id}>
                        {finish.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="doorTypes"
          render={({ field }) => (
            <FormItem className="grow basis-1/2">
              <FormLabel htmlFor={field.name}>Tipos de puerta</FormLabel>
              <FormControl>
                <MultiSelect
                  {...field}
                  options={doorTypes.map((doorType) => ({
                    label: doorType.name,
                    value: doorType.id,
                  }))}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  placeholder="Selecciona los tipos de puerta"
                  variant="inverted"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem className="grow basis-1/2">
              <FormLabel htmlFor={field.name}>Imágenes</FormLabel>
              <FormControl>
                <div>
                  <Input
                    accept="image/*"
                    className="hidden"
                    disabled={loading}
                    id="images"
                    multiple={true}
                    onChange={(event) => {
                      const filesArray = Array.from(event.target.files || []);
                      field.onChange(filesArray);
                      setNewImages([...newImages, ...filesArray]);
                    }}
                    placeholder="Imágenes"
                    ref={field.ref}
                    type="file"
                  />
                  <Button
                    className={`w-full justify-start ${newImages.length === 0 ? "text-muted-foreground" : ""}`}
                    onClick={() => document.getElementById("images")?.click()}
                    type="button"
                    variant="outline"
                  >
                    {newImages.length > 0
                      ? `${newImages.length} ${newImages.length === 1 ? "imagen" : "imágenes"} seleccionadas`
                      : "Seleccionar imágenes"}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {newImages.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Nuevas imágenes</div>
            <div className="grid grid-cols-5 gap-4">
              {newImages.map((file, index) => {
                const preview = URL.createObjectURL(file);
                return (
                  <div key={index} className="relative h-24">
                    <Image
                      alt={`Preview ${index}`}
                      className="rounded-md border object-contain"
                      fill={true}
                      sizes="96px"
                      src={preview}
                    />
                    <button
                      type="button"
                      className="bg-primary absolute top-1 right-1 flex size-8 cursor-pointer items-center justify-center rounded-full text-white"
                      onClick={() => {
                        setNewImages(newImages.filter((_, i) => i !== index));
                      }}
                    >
                      <X />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {existingImages.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Imágenes existentes</div>
            <div className="grid grid-cols-5 gap-4">
              {existingImages.map((src, index) => (
                <div key={index} className="relative h-24">
                  <Image
                    alt={`Imagen existente ${index}`}
                    className="rounded-md border object-contain"
                    fill={true}
                    sizes="96px"
                    src={src}
                  />
                  <button
                    type="button"
                    className="bg-primary absolute top-1 right-1 flex size-8 cursor-pointer items-center justify-center rounded-full text-white"
                    onClick={() => {
                      setToDelete([...toDelete, src]);
                      setExistingImages(
                        existingImages.filter((image) => image !== src),
                      );
                    }}
                  >
                    <X />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <ButtonLoading type="submit" loading={loading}>
        {label}
      </ButtonLoading>
    </form>
  </Form>
);

export { HardwareForm };
