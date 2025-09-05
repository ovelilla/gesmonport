// Vendors
import { z } from "zod";
// Enums
import { BudgetStatus } from "@prisma/client";

const budgetSchema = z.object({
  customerId: z
    .string()
    .min(1, { error: "Debes seleccionar un cliente" })
    .transform((val) => val.trim()),
  date: z.string().min(1, { error: "La fecha es requerida" }),
  discount: z.coerce
    .number()
    .min(0, { error: "El descuento no puede ser negativo" })
    .max(100, { error: "El descuento no puede ser mayor a 100" }),
  items: z.array(
    z.object({
      architraveId: z.string().min(1, { error: "El tapajuntas es requerido" }),
      doorId: z.string().min(1, { error: "La puerta es requerida" }),
      frameId: z.string().min(1, { error: "El marco es requerido" }),
      glassId: z.string().min(1, { error: "El vidrio es requerido" }),
      hardwareIds: z
        .array(z.string())
        .max(100, { error: "Máximo 100 tipos de herrajes permitidos" }),
      height: z.coerce
        .number()
        .min(1, { error: "La altura debe ser mayor que 0" }),
      observations: z
        .string()
        .max(500, {
          error: "Las observaciones no pueden exceder los 500 caracteres",
        })
        .optional(),
      quantity: z.coerce
        .number()
        .min(1, { error: "La cantidad debe ser mayor que 0" }),
      thickness: z.coerce
        .number()
        .min(1, { error: "El grosor debe ser mayor que 0" }),
      width: z.coerce
        .number()
        .min(1, { error: "El ancho debe ser mayor que 0" }),
    }),
  ),
  number: z.coerce
    .number()
    .min(0, { error: "El número no puede ser negativo" })
    .max(999999, { error: "El número no puede ser mayor a 999999" }),
  observations: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  paymentMethodId: z
    .string()
    .min(1, { error: "Debes seleccionar un método de pago" })
    .transform((val) => val.trim()),
  reference: z
    .union([z.literal(""), z.string().trim().max(64).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  sendAddress: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  showIBAN: z.coerce.boolean(),
  status: z
    .string()
    .trim()
    .min(1, { error: "El estado es requerido" })
    .pipe(z.enum(BudgetStatus, { error: "El estado no es válido" })),
  tax: z.coerce
    .number()
    .min(0, { error: "El impuesto no puede ser negativo" })
    .max(100, { error: "El impuesto no puede ser mayor a 100" }),
  validity: z
    .union([z.literal(""), z.string().trim().max(64).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
});

export { budgetSchema };
