// Vendors
import * as z from "zod";
// Schemas
import { contactSchema } from "../contacts.schema";

export type ContactSchema = z.infer<typeof contactSchema>;
