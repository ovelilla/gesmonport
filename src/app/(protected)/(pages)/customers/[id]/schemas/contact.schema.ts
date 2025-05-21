import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  email: z
    .string({ required_error: "El correo electrónico es obligatorio" })
    .min(1, "El correo electrónico es obligatorio")
    .email("El correo electrónico es inválido"),
  phone: z.string().optional(),
});

export { contactSchema };
