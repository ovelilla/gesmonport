// Vendors
import * as z from "zod";

const userSchema = z.object({
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
  isAuthorized: z.coerce.boolean({
    error: "El autorizado es requerido",
  }),
  role: z.string().min(1, { error: "El rol es requerido" }),
});

export { userSchema };
