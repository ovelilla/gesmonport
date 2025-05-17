// Vendors
import * as z from "zod";
// Schemas
import { signUpSchema } from "../signup.schema";

type SignUpSchema = z.infer<typeof signUpSchema>;

export type { SignUpSchema };
