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
import { ResetPasswordHook } from "./hooks/reset-password.hook";

const ResetPasswordContainer = () => {
  const {
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  } = ResetPasswordHook();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Restablece tu contraseña</CardTitle>
        <CardDescription>
          Introduce tu nueva contraseña a continuación.
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
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel htmlFor={field.name}>
                        Nueva contraseña
                      </FormLabel>
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
                    </FormItem>
                  );
                }}
              />
            </div>
            <ButtonLoading type="submit" loading={loading}>
              Restablecer contraseña
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin" }}>
          Volver a iniciar sesión
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export { ResetPasswordContainer };
