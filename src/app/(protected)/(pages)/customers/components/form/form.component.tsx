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
import { Textarea } from "@/components/ui/textarea";
// Types
import type { CustomerFormProps } from "./types/form.component.types";

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
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
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
        <FormField
          control={form.control}
          name="vatNumber"
          render={({ field }) => (
            <FormItem>
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
        <FormField
          control={form.control}
          name="iban"
          render={({ field }) => (
            <FormItem>
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
