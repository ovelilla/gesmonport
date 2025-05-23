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
    .string({ required_error: "El nombre es obligatorio" })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(64, "El nombre no puede tener más de 64 caracteres")
    .trim(),
  email: z
    .string({ required_error: "El correo electrónico es obligatorio." })
    .min(1, "El correo electrónico es obligatorio.")
    .email("El correo electrónico no es válido.")
    .trim()
    .toLowerCase(),
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(1, "La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(32, "La contraseña no puede tener más de 32 caracteres")
    .trim()
    .superRefine((value, ctx) => {
      passwordRules.forEach((rule) => {
        if (!rule.test(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: rule.message,
          });
        }
      });
    }),
});

export { signUpSchema };
