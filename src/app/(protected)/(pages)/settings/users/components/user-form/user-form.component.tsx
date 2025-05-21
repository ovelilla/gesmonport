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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
// Constants
import constants from "./constants/user-form.constants";
// Types
import type { UserFormProps } from "./types/user-form.component.types";

const UserForm = ({ form, handleSubmit, label, loading }: UserFormProps) => (
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
                  placeholder="Introduce tu nombre"
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
                  autoComplete="username"
                  disabled={loading}
                  id={field.name}
                  placeholder="p. ej., nombre@ejemplo.com"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isAuthorized"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Autorizado</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(value === "true")}
                defaultValue={String(field.value)}
              >
                <FormControl>
                  <SelectTrigger
                    id="isAuthorized"
                    aria-labelledby="isAuthorized"
                  >
                    <SelectValue placeholder="Usuario autorizado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    { id: true, name: "Sí" },
                    { id: false, name: "No" },
                  ].map((auth) => (
                    <SelectItem key={String(auth.id)} value={String(auth.id)}>
                      {auth.name}
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Rol</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger id="role" aria-labelledby="role">
                    <SelectValue placeholder="Rol del usuario" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    { id: "USER", name: "Usuario" },
                    { id: "ADMIN", name: "Administrador" },
                  ].map((auth) => (
                    <SelectItem key={auth.id} value={auth.id}>
                      {auth.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

export { UserForm };
