// Vendors
import * as z from "zod";

const hardwareSchema = z.object({
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
  price: z.coerce
    .number({ required_error: "El precio es requerido" })
    .min(0, "El precio no puede ser negativo")
    .max(999999, "El precio no puede ser mayor a 999999"),
  finishId: z
    .union([z.string().min(1), z.literal(""), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  doorTypes: z
    .array(z.string())
    .max(100, "Máximo 100 tipos de puerta permitidos"),
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

export { hardwareSchema };
