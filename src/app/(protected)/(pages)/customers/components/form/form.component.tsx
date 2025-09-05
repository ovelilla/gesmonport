// Components
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// Types
import type { CustomerFormProps } from "./types/form.component.types";

const CustomerForm = ({
  form,
  handleSubmit,
  label,
  loading,
  paymentMethods,
}: CustomerFormProps) => (
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
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
          name="legalName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Nombre legal</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Nombre legal"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Ej: nombre@ejemplo.com"
                  type="email"
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
            name="phone"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading}
                    id={field.name}
                    placeholder="Ej: 666123456"
                    type="tel"
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vatNumber"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>NIF</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading}
                    id={field.name}
                    placeholder="Ej: 12345678Z"
                    type="text"
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="billingAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>
                Dirección de facturación
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Calle, número, piso... ciudad, provincia, código postal"
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shippingAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Dirección de envío</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Calle, número, piso... ciudad, provincia, código postal"
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
            name="iban"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>IBAN</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={loading}
                    id={field.name}
                    placeholder="Ej: ES9121000418450200051332"
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
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>Forma de pago</FormLabel>
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
                    {paymentMethods.map((method) => (
                      <SelectItem key={method.id} value={method.id}>
                        {method.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="discountDoor"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>Descuento puerta</FormLabel>
                <FormControl>
                  <div className="relative">
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
                      %
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discountParts"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>Descuento piezas</FormLabel>
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
                      %
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Notas</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Añade aquí cualquier nota que quieras recordar sobre este cliente."
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <ButtonLoading type="submit" loading={loading}>
        {label}
      </ButtonLoading>
    </form>
  </Form>
);

export { CustomerForm };
