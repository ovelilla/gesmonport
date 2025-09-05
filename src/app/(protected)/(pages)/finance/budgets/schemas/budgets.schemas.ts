// Vendors
import { z } from "zod";
// Enums
import { BudgetStatus } from "@prisma/client";

const budgetSchema = z.object({
  customerId: z
    .string()
    .min(1, "Debes seleccionar un cliente")
    .transform((val) => val.trim()),
  date: z
    .string({ required_error: "La fecha es requerida" })
    .min(1, "La fecha es requerida"),
  discount: z.coerce
    .number({ required_error: "El descuento es requerido" })
    .min(0, "El descuento no puede ser negativo")
    .max(100, "El descuento no puede ser mayor a 100"),
  items: z.array(
    z.object({
      architraveId: z
        .string({ required_error: "El tapajuntas es requerido" })
        .min(1, "El tapajuntas es requerido"),
      doorId: z
        .string({ required_error: "La puerta es requerida" })
        .min(1, "La puerta es requerida"),
      frameId: z
        .string({ required_error: "El marco es requerido" })
        .min(1, "El marco es requerido"),
      glassId: z
        .string({ required_error: "El vidrio es requerido" })
        .min(1, "El vidrio es requerido"),
      hardwareIds: z
        .array(z.string())
        .max(100, "Máximo 100 tipos de herrajes permitidos"),
      height: z.coerce
        .number({ required_error: "La altura es requerida" })
        .min(1, "La altura debe ser mayor que 0"),
      observations: z
        .string()
        .max(500, "Las observaciones no pueden exceder los 500 caracteres")
        .optional(),
      quantity: z.coerce
        .number({ required_error: "La cantidad es requerida" })
        .min(1, "La cantidad debe ser mayor que 0"),
      thickness: z.coerce
        .number({ required_error: "El grosor es requerido" })
        .min(1, "El grosor debe ser mayor que 0"),
      width: z.coerce
        .number({ required_error: "El ancho es requerido" })
        .min(1, "El ancho debe ser mayor que 0"),
    }),
  ),
  number: z.coerce
    .number({ required_error: "El número es requerido" })
    .min(0, "El número no puede ser negativo")
    .max(999999, "El número no puede ser mayor a 999999"),
  observations: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  paymentMethodId: z
    .string()
    .min(1, "Debes seleccionar un método de pago")
    .transform((val) => val.trim()),
  reference: z
    .union([z.literal(""), z.string().trim().max(64).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  sendAddress: z
    .union([z.literal(""), z.string().trim().max(500).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
  showIBAN: z.coerce.boolean({
    required_error: "El campo 'Mostrar IBAN' es requerido",
  }),
  status: z.nativeEnum(BudgetStatus, {
    required_error: "El estado es requerido",
  }),
  tax: z.coerce
    .number({ required_error: "El impuesto es requerido" })
    .min(0, "El impuesto no puede ser negativo")
    .max(100, "El impuesto no puede ser mayor a 100"),
  validity: z
    .union([z.literal(""), z.string().trim().max(64).optional(), z.null()])
    .transform((val) => (val === "" ? null : val))
    .optional(),
});

export { budgetSchema };
