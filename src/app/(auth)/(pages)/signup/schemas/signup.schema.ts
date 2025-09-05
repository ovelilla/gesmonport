// Vendors
import * as z from "zod";

export const passwordRules = [
  {
    message: "La contraseña debe tener al menos 6 caracteres",
    test: (v: string) => v.length >= 6,
  },
  {
    message: "La contraseña debe contener al menos una letra minúscula",
    test: (v: string) => /[a-z]/.test(v),
  },
  {
    message: "La contraseña debe contener al menos un número",
    test: (v: string) => /\d/.test(v),
  },
  {
    message: "La contraseña debe contener al menos un carácter especial",
    test: (v: string) => /[^a-zA-Z0-9]/.test(v),
  },
  {
    message: "La contraseña debe contener al menos una letra mayúscula",
    test: (v: string) => /[A-Z]/.test(v),
  },
];

const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "El nombre es obligatorio." })
    .min(2, { error: "El nombre debe tener al menos 2 caracteres." })
    .max(64, { error: "El nombre no puede tener más de 64 caracteres." }),
  email: z
    .string()
    .trim()
    .min(1, { error: "El correo electrónico es obligatorio." })
    .max(254, {
      error: "El correo electrónico no puede superar los 254 caracteres.",
    })
    .pipe(z.email({ error: "El correo electrónico no es válido." }))
    .transform((s) => s.toLowerCase()),
  password: z
    .string()
    .min(1, { error: "La contraseña es obligatoria." })
    .min(6, { error: "La contraseña debe tener al menos 6 caracteres." })
    .max(32, { error: "La contraseña no puede tener más de 32 caracteres." })
    .trim()
    .superRefine((value, ctx) => {
      passwordRules.forEach((rule) => {
        if (!rule.test(value)) {
          ctx.addIssue({
            code: "custom",
            message: rule.message,
          });
        }
      });
    }),
});

export { signUpSchema };
