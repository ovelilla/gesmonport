// Vendors
import * as z from "zod";

const forgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "El correo electrónico es obligatorio." })
    .min(1, "El correo electrónico es obligatorio.")
    .email("El correo electrónico no es válido."),
});

export { forgotPasswordSchema };
