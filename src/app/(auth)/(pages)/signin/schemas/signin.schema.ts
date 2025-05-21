// Vendors
import * as z from "zod";

const signInSchema = z.object({
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
    .trim(),
});

export { signInSchema };
