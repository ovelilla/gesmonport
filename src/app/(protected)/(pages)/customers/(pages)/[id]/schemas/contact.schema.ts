import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, { error: "El nombre es requerido" })
    .max(64, { error: "El nombre no puede tener más de 64 caracteres" })
    .trim(),
  email: z
    .union([
      z.literal(""),
      z
        .string()
        .trim()
        .max(254, {
          error: "El correo electrónico no puede superar los 254 caracteres.",
        })
        .pipe(z.email({ error: "El correo electrónico no es válido." }))
        .transform((s) => s.toLowerCase()),
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
