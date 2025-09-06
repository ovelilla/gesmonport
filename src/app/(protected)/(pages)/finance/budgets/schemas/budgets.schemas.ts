// Vendors
import { z } from "zod";
// Enums
import { BudgetStatus } from "@prisma/client";

const budgetSchema = z.object({
  customerId: z
    .string()
    .min(1, { error: "Debes seleccionar un cliente" })
    .trim(),
  date: z.string().min(1, { error: "La fecha es requerida" }),
  discount: z
    .number({ error: "El descuento no es válido" })
    .min(0, { error: "El descuento no puede ser negativo" })
    .max(100, { error: "El descuento no puede ser mayor a 100" }),
  items: z.array(
    z.object({
      architraveId: z.string().min(1, { error: "El tapajuntas es requerido" }),
      doorTypeId: z.string().min(1, { error: "El tipo de hoja es requerido" }),
      doorFamilyId: z
        .string()
        .min(1, { error: "La familia de hoja es requerida" }),
      doorModelId: z
        .string()
        .min(1, { error: "El modelo de hoja es requerido" }),
      doorFinishId: z
        .string()
        .min(1, { error: "El acabado de hoja es requerido" }),
      frameId: z.string().min(1, { error: "El marco es requerido" }),
      glassId: z.string().min(1, { error: "El vidrio es requerido" }),
      hardwareIds: z
        .array(z.string())
        .max(100, { error: "Máximo 100 tipos de herrajes permitidos" }),
      height: z
        .number({ error: "La altura no es válida" })
        .min(1, { error: "La altura debe ser mayor que 0" })
        .max(999999, { error: "La altura no puede ser mayor a 999999" }),
      observations: z
        .string()
        .max(500, {
          error: "Las observaciones no pueden exceder los 500 caracteres",
        })
        .optional(),
      quantity: z
        .number({ error: "La cantidad no es válida" })
        .min(1, { error: "La cantidad debe ser mayor que 0" })
        .max(999999, { error: "La cantidad no puede ser mayor a 999999" }),
      thickness: z
        .number({ error: "El grosor no es válido" })
        .min(1, { error: "El grosor debe ser mayor que 0" })
        .max(999999, { error: "El grosor no puede ser mayor a 999999" }),
      width: z
        .number({ error: "El ancho no es válido" })
        .min(1, { error: "El ancho debe ser mayor que 0" })
        .max(999999, { error: "El ancho no puede ser mayor a 999999" }),
    }),
  ),
  number: z
    .number({ error: "El número no es válido" })
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
  showIBAN: z.boolean(),
  status: z.enum(BudgetStatus, { error: "El estado no es válido" }),
  tax: z
    .number({ error: "El impuesto no es válido" })
    .min(0, { error: "El impuesto no puede ser negativo" })
    .max(100, { error: "El impuesto no puede ser mayor a 100" }),
  validity: z
    .union([z.literal(""), z.string().trim().max(64).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
});

export { budgetSchema };
