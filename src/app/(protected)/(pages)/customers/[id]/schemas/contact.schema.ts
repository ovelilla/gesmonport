import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido")
    .max(64, "El nombre no puede tener más de 64 caracteres")
    .trim(),
  email: z
    .string({ required_error: "El correo electrónico es obligatorio." })
    .min(1, "El correo electrónico es obligatorio.")
    .email("El correo electrónico no es válido.")
    .trim()
    .toLowerCase(),
  phone: z.string().optional(),
});

export { contactSchema };
