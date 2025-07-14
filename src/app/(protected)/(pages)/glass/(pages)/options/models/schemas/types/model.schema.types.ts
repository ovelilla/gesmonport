// Vendors
import * as z from "zod";
// Schemas
import { modelSchema } from "../model.schema";

export type ModelSchema = z.infer<typeof modelSchema>;
