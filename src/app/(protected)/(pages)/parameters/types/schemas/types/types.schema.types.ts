// Vendors
import * as z from "zod";
// Schemas
import { typeSchema } from "../types.schema";

export type TypeSchema = z.infer<typeof typeSchema>;
