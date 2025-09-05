// Vendors
import * as z from "zod";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { error: "El correo electrónico es obligatorio." })
    .max(254, {
      error: "El correo electrónico no puede superar los 254 caracteres.",
    })
    .pipe(z.email({ error: "El correo electrónico no es válido." }))
    .transform((s) => s.toLowerCase()),
});

export { forgotPasswordSchema };
