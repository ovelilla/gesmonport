// Vendors
import * as z from "zod";
// Schemas
import { extraSchema } from "../extras.schema";

export type ExtraSchema = z.infer<typeof extraSchema>;
