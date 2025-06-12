import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido")
    .max(64, "El nombre no puede tener más de 64 caracteres")
    .trim(),
  email: z
    .union([
      z.literal(""),
      z
        .string()
        .email("El correo electrónico es inválido")
        .trim()
        .toLowerCase(),
      z.null(),
    ])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  phone: z
    .union([z.literal(""), z.string().trim().optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  departmentId: z
    .union([z.literal(""), z.string().trim().optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  positionId: z
    .union([z.literal(""), z.string().trim().optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
});

export { contactSchema };
