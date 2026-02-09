// Vendors
import * as z from "zod";
// Schemas
import { modelSchema } from "../models.schema";

export type ModelSchema = z.infer<typeof modelSchema>;
