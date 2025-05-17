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
import {
  PasswordStrength,
  PasswordStrengthBar,
  PasswordStrengthRules,
  PasswordStrengthRule,
} from "@/components/password-strength";
// Hooks
import { SignUpHook } from "./hooks/signup.hook";

const SignUpContainer = () => {
  const {
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  } = SignUpHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registrarse</CardTitle>
        <CardDescription>
          Crea una cuenta para acceder a todas las funciones.
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>Contraseña</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            autoComplete="new-password"
                            className="pr-12"
                            disabled={loading}
                            id={field.name}
                            placeholder="Introduce una contraseña segura"
                            type={showPassword ? "text" : "password"}
                          />
                        </FormControl>
                        <ButtonTogglePassword
                          aria-label={
                            showPassword
                              ? "Ocultar contraseña"
                              : "Mostrar contraseña"
                          }
                          disabled={loading}
                          onClick={handleToggleShowPassword}
                          showPassword={showPassword}
                        />
                      </div>
                      <FormMessage />
                      {field.value && (
                        <PasswordStrength value={field.value}>
                          <PasswordStrengthBar />
                          <PasswordStrengthRules>
                            <PasswordStrengthRule rule="length">
                              Mínimo 6 caracteres
                            </PasswordStrengthRule>
                            <PasswordStrengthRule rule="number">
                              Un número
                            </PasswordStrengthRule>
                            <PasswordStrengthRule rule="uppercase">
                              Una letra mayúscula
                            </PasswordStrengthRule>
                            <PasswordStrengthRule rule="special">
                              Un carácter especial
                            </PasswordStrengthRule>
                          </PasswordStrengthRules>
                        </PasswordStrength>
                      )}
                    </FormItem>
                  );
                }}
              />
            </div>
            <ButtonLoading type="submit" loading={loading}>
              Registrarse
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin", prefetch: false }}>
          Registrarse
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { SignUpContainer };
