// Vendors
import * as z from "zod";
// Schemas
import { typeSchema } from "../type.schema";

export type TypeSchema = z.infer<typeof typeSchema>;
