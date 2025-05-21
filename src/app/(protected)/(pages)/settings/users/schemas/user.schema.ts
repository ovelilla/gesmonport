// Vendors
import * as z from "zod";

const userSchema = z.object({
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
  isAuthorized: z.coerce.boolean({
    required_error: "El autorizado es requerido",
  }),
  role: z
    .string({ required_error: "El rol es requerido" })
    .min(1, "El rol es requerido"),
});

export { userSchema };
