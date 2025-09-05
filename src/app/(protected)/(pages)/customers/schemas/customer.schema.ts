// Vendors
import { z } from "zod";

const customerSchema = z.object({
  name: z
    .string()
    .min(1, { error: "El nombre es requerido" })
    .max(64, { error: "El nombre no puede tener más de 64 caracteres" })
    .trim(),
  legalName: z
    .union([z.literal(""), z.string().trim().max(64).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
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
  billingAddress: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  shippingAddress: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  vatNumber: z
    .union([
      z.literal(""),
      z.string().trim().toUpperCase().optional(),
      z.null(),
    ])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  iban: z
    .union([
      z.literal(""),
      z.string().trim().toUpperCase().optional(),
      z.null(),
    ])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  notes: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  discountDoor: z
    .number({ error: "El descuento no es válido" })
    .min(0, { error: "El descuento no puede ser negativo" })
    .max(100, { error: "El descuento no puede ser mayor del 100%" })
    .optional(),
  discountParts: z
    .number({ error: "El descuento no es válido" })
    .min(0, { error: "El descuento no puede ser negativo" })
    .max(100, { error: "El descuento no puede ser mayor del 100%" })
    .optional(),
  paymentMethodId: z
    .union([z.string().min(1), z.literal(""), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
});

export { customerSchema };
