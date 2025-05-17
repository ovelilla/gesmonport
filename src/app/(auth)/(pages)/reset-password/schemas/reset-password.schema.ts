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

const resetPasswordSchema = z.object({
  password: z
    .string({ required_error: "La contraseña es obligatoria" })
    .min(1, "La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(32, "La contraseña no puede tener más de 32 caracteres")
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

export { resetPasswordSchema };
