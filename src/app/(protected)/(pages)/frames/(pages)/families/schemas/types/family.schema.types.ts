// Vendors
import * as z from "zod";
// Schemas
import { familySchema } from "../family.schema";

export type FamilySchema = z.infer<typeof familySchema>;
