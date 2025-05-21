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

const paymentMethods = [
  { id: "CASH", name: "Efectivo" },
  { id: "BANK_DRAFT_30_60", name: "Giro 30/60" },
  { id: "BANK_TRANSFER", name: "Transferencia bancaria" },
  { id: "NOT_SPECIFIED", name: "No especificado" },
];

const CustomerForm = ({
  form,
  handleSubmit,
  label,
  loading,
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={loading}
                  id={field.name}
                  placeholder="Correo electrónico"
                  type="email"
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
                    placeholder="Teléfono"
                    type="tel"
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
                    placeholder="NIF"
                    type="text"
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
                  placeholder="Dirección de facturación"
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
                  placeholder="Dirección de envío"
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
                    placeholder="IBAN"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="grow basis-1/2">
                <FormLabel htmlFor={field.name}>Método de pago</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      id="paymentMethod"
                      aria-labelledby="paymentMethod"
                    >
                      <SelectValue placeholder="Método de pago" />
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
                      max={100}
                      min={0}
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
                      max={100}
                      min={0}
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
                  placeholder="Notas"
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
