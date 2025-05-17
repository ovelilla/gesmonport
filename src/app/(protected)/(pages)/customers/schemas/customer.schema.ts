import { z } from "zod";

const customerSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido"),
  email: z.string().email("El correo electrónico es inválido").optional(),
  phone: z.string().optional(),
  billingAddress: z.string().optional(),
  shippingAddress: z.string().optional(),
  vatNumber: z.string().optional(),
  iban: z.string().optional(),
  notes: z.string().optional(),
});

export { customerSchema };
