// Vendors
import * as z from "zod";

const signInSchema = z.object({
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
    .trim(),
});

export { signInSchema };
