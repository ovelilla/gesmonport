// Vendors
import { z } from "zod";

const departmentSchema = z.object({
  name: z
    .string()
    .min(1, { error: "El nombre es requerido" })
    .max(64, { error: "El nombre no puede tener más de 64 caracteres" })
    .trim(),
  description: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
});

export { departmentSchema };
