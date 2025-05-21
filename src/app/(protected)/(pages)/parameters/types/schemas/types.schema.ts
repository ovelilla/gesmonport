// Vendors
import { z } from "zod";

const typeSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido")
    .max(64, "El nombre no puede tener más de 64 caracteres")
    .trim(),
  description: z.string().trim().optional(),
});

export { typeSchema };
