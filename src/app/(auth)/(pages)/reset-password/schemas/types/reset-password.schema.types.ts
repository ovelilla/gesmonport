// Vendors
import * as z from "zod";
// Schemas
import { resetPasswordSchema } from "../reset-password.schema";

type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export type { ResetPasswordSchema };
