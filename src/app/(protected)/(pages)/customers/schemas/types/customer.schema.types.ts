// Vendors
import * as z from "zod";
// Schemas
import { customerSchema } from "../customer.schema";

export type CustomerSchema = z.infer<typeof customerSchema>;
