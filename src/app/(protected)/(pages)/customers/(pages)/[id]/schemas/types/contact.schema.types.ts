// Vendors
import * as z from "zod";
// Schemas
import { contactSchema } from "../contact.schema";

export type ContactSchema = z.infer<typeof contactSchema>;
