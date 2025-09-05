// Vendors
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
// Components
import { AutoComplete } from "@/components/ui/autocomplete";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Item } from "./components/item/item.component";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// Constants
import { DEFAULT_ITEM } from "../../constants/budgets.constants";
// Enums
import { BudgetStatus } from "@prisma/client";
// Hooks
import { BudgetFormHook } from "./hooks/form.hook";
// Icons
import { CalendarIcon, Plus } from "lucide-react";
// Libs
import { cn } from "@/lib/utils";
// Types
import type { BudgetFormProps } from "./types/form.component.types";

const BudgetForm = ({
  architraves,
  customers,
  doors,
  fieldArray,
  form,
  frames,
  handleSubmit,
  hardwares,
  label,
  loading,
  paymentMethods,
}: BudgetFormProps) => {
  const {
    customerItems,
    isCalendarOpen,
    searchValueCustomer,
    setIsCalendarOpen,
    setSearchValueCustomer,
  } = BudgetFormHook({
    customers,
    form,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex min-h-full flex-col gap-6"
      >
        <div className="flex grow flex-col gap-4">
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-2">
            <FormField
              control={form.control}
              name="customerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cliente</FormLabel>
                  <FormControl>
                    <AutoComplete
                      emptyMessage="No se han encontrado clientes."
                      items={customerItems}
                      onSearchValueChange={setSearchValueCustomer}
                      onSelectedValueChange={field.onChange}
                      placeholder="Nombre cliente"
                      searchValue={searchValueCustomer}
                      selectedValue={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha</FormLabel>
                  <Popover
                    open={isCalendarOpen}
                    onOpenChange={setIsCalendarOpen}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          className={cn(
                            "w-full pl-3 text-left font-normal text-ellipsis",
                            !field.value && "text-muted-foreground",
                          )}
                          role="combobox"
                          variant="outline"
                        >
                          {field.value ? (
                            format(field.value, "P", { locale: es })
                          ) : (
                            <span>Seleccionar fecha</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        captionLayout="dropdown"
                        id={field.name}
                        locale={es}
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(e) => {
                          field.onChange(e);
                          setIsCalendarOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Estado</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        id={field.name}
                        aria-labelledby={field.name}
                      >
                        <SelectValue placeholder="Seleccionar estado" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(BudgetStatus).map((value) => (
                        <SelectItem key={value} value={value}>
                          {
                            {
                              pending: "Pendiente",
                              accepted: "Aceptado",
                              rejected: "Rechazado",
                              expired: "Caducado",
                              closed: "Cerrado",
                            }[value]
                          }
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Número</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      id={field.name}
                      type="number"
                      placeholder="Número"
                      value={field.value ?? 0}
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

            <FormField
              control={form.control}
              name="paymentMethodId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Método de pago</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          id={field.name}
                          aria-labelledby={field.name}
                        >
                          <SelectValue placeholder="Seleccionar método de pago" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {paymentMethods.map((method) => (
                          <SelectItem key={method.id} value={method.id}>
                            {method.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="validity"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel htmlFor={field.name}>Validez</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={loading}
                        id={field.name}
                        placeholder="Validez"
                        type="text"
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="showIBAN"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel htmlFor={field.name}>Mostrar IBAN</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value === "true")
                        }
                        defaultValue={String(field.value)}
                      >
                        <FormControl>
                          <SelectTrigger
                            id={field.name}
                            aria-labelledby={field.name}
                          >
                            <SelectValue placeholder="Seleccionar IBAN" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={String(true)}>Sí</SelectItem>
                          <SelectItem value={String(false)}>No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel htmlFor={field.name}>Descuento (%)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={loading}
                        id={field.name}
                        placeholder="Descuento (%)"
                        type="number"
                        value={field.value ?? 0}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tax"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel htmlFor={field.name}>IVA (%)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={loading}
                        id={field.name}
                        placeholder="IVA (%)"
                        type="number"
                        value={field.value ?? 0}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="sendAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Dirección de envío</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={loading}
                      id={field.name}
                      placeholder="Dirección de envío"
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="observations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Observaciones</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={loading}
                      id={field.name}
                      placeholder="Observaciones"
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex grow overflow-auto rounded-md border">
            <div className="flex grow flex-col gap-4 p-4">
              <div className="grid [grid-template-columns:minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_minmax(160px,1fr)_160px_120px_80px] gap-2">
                <div className="text-sm">Puerta</div>
                <div className="text-sm">Vidrio</div>
                <div className="text-sm">Tapajuntas</div>
                <div className="text-sm">Marco</div>
                <div className="text-sm">Herrajes</div>
                <div className="text-sm">Medidas</div>
                <div className="text-sm">Cantidad</div>
                <div className="justify-self-center text-sm">Acciones</div>
              </div>
              {fieldArray.fields.map((field, index) => (
                <Item
                  architraves={architraves}
                  key={field.id}
                  doors={doors}
                  fieldArray={fieldArray}
                  frames={frames}
                  hardwares={hardwares}
                  index={index}
                />
              ))}
            </div>
          </div>
          <Button
            className="self-start"
            onClick={() => fieldArray.append(DEFAULT_ITEM)}
            type="button"
          >
            <Plus />
            Añadir item
          </Button>
        </div>
        <ButtonLoading type="submit" loading={loading}>
          {label}
        </ButtonLoading>
      </form>
    </Form>
  );
};

export { BudgetForm };
