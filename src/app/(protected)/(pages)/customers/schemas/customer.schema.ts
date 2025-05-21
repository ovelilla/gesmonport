// Vendors
import { z } from "zod";
// Enums
import { PaymentMethod } from "@prisma/client";

const customerSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido")
    .max(64, "El nombre no puede tener más de 64 caracteres")
    .trim(),
  email: z
    .string()
    .email("El correo electrónico es inválido")
    .trim()
    .toLowerCase()
    .optional(),
  phone: z.string().trim().optional(),
  billingAddress: z.string().trim().max(500).optional(),
  shippingAddress: z.string().trim().max(500).optional(),
  vatNumber: z.string().trim().toUpperCase().optional(),
  iban: z.string().trim().toUpperCase().optional(),
  notes: z.string().trim().max(500).optional(),
  discountDoor: z.coerce
    .number()
    .min(0, "El descuento no puede ser negativo")
    .max(100, "El descuento no puede ser mayor del 100%")
    .optional(),
  discountParts: z.coerce
    .number()
    .min(0, "El descuento no puede ser negativo")
    .max(100, "El descuento no puede ser mayor del 100%")
    .optional(),
  paymentMethod: z.nativeEnum(PaymentMethod).optional(),
});

export { customerSchema };
