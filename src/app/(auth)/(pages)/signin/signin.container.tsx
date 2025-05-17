"use client";
// Components
import { ButtonLink } from "@/components/ui/button-link";
import { ButtonLoading } from "@/components/ui/button-loading";
import { ButtonTogglePassword } from "@/components/ui/button-toggle-password";
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
import { SignInHook } from "./hooks/signin.hook";

const SignInContainer = () => {
  const {
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  } = SignInHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>
          ¡Bienvenido de nuevo! Por favor, inicia sesión en tu cuenta.
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
                        placeholder="Tu correo electrónico"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Contraseña</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          autoComplete="current-password"
                          className="pr-12"
                          disabled={loading}
                          id="password"
                          placeholder="Tu contraseña"
                          type={showPassword ? "text" : "password"}
                        />
                      </FormControl>
                      <ButtonTogglePassword
                        aria-label={
                          showPassword
                            ? "Mostrar contraseña"
                            : "Ocultar contraseña"
                        }
                        disabled={loading}
                        onClick={handleToggleShowPassword}
                        showPassword={showPassword}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ButtonLink
                className="h-8 self-start"
                linkProps={{ href: "/forgot-password", prefetch: false }}
              >
                ¿Olvidaste tu contraseña?
              </ButtonLink>
            </div>
            <ButtonLoading type="submit" loading={loading}>
              Iniciar sesión
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>

      <CardFooter>
        <ButtonLink linkProps={{ href: "/signup", prefetch: false }}>
          ¿No tienes una cuenta? Regístrate
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { SignInContainer };
