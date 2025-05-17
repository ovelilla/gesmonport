"use client";
// Components
import { ButtonLink } from "@/components/ui/button-link";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// Hooks
import { ForgotPasswordHook } from "./hooks/forgot-password.hook";

const ForgotPasswordContainer = () => {
  const { form, handleSubmit, loading } = ForgotPasswordHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>¿Olvidaste tu contraseña?</CardTitle>
        <CardDescription>
          Introduce tu correo electrónico y te enviaremos instrucciones para
          restablecerla.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>
                      Correo electrónico
                    </FormLabel>
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
            </div>
            <ButtonLoading type="submit" loading={loading}>
              Enviar enlace de restablecimiento
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin", prefetch: false }}>
          ¿Recordaste tu contraseña? Inicia sesión
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { ForgotPasswordContainer };
