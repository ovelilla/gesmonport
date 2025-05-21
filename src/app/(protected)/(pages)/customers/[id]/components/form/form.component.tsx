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
// Types
import type { ContactFormProps } from "./types/form.component.types";

const ContactForm = ({
  form,
  handleSubmit,
  label,
  loading,
}: ContactFormProps) => (
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
      </div>
      <ButtonLoading type="submit" loading={loading}>
        {label}
      </ButtonLoading>
    </form>
  </Form>
);

export { ContactForm };
