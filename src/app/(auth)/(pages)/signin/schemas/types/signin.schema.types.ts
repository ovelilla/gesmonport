// Vendors
import * as z from "zod";
// Schemas
import { signInSchema } from "../signin.schema";

type SignInSchema = z.infer<typeof signInSchema>;

export type { SignInSchema };
