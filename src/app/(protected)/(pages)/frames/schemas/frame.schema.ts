// Vendors
import { z } from "zod";

const frameSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido")
    .max(64, "El nombre no puede tener más de 64 caracteres")
    .trim(),
  description: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  reference: z
    .union([z.literal(""), z.string().trim().max(64).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  heightOffset: z.coerce
    .number({ required_error: "La altura a descontar es requerida" })
    .min(0, "La altura a descontar no puede ser negativa")
    .max(999999, "La altura a descontar no puede ser mayor a 999999"),
  sitec: z.coerce
    .boolean({
      required_error: "El campo SITEC es requerido",
    })
    .default(false),
  familyId: z
    .string()
    .min(1, "Debes seleccionar una familia")
    .transform((val) => val.trim()),
  finishId: z
    .string()
    .min(1, "Debes seleccionar un acabado")
    .transform((val) => val.trim()),
  typeId: z
    .string()
    .min(1, "Debes seleccionar un tipo")
    .transform((val) => val.trim()),
  images: z
    .array(z.union([z.instanceof(File), z.string()]))
    .max(10, "Máximo 10 imágenes permitidas")
    .refine(
      (files) =>
        files
          .filter((file) => file instanceof File)
          .every((file) => file.size < 5 * 1024 * 1024),
      "El tamaño máximo permitido por imagen es de 5MB",
    )
    .refine(
      (files) =>
        files
          .filter((file) => file instanceof File)
          .every((file) =>
            ["image/jpeg", "image/png", "image/webp"].includes(file.type),
          ),
      "Solo se permiten imágenes en formato JPEG, PNG o WEBP",
    )
    .optional(),
});

export { frameSchema };
