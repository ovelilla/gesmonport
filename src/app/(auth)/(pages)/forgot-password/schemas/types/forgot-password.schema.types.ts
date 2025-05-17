// Vendors
import * as z from "zod";
// Schemas
import { forgotPasswordSchema } from "../forgot-password.schema";

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export type { ForgotPasswordSchema };
