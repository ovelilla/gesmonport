// Vendors
import * as z from "zod";
// Schemas
import { glassSchema } from "../glass.schema";

export type GlassSchema = z.infer<typeof glassSchema>;
