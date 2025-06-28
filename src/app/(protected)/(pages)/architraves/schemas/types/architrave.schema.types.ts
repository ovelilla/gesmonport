// Vendors
import * as z from "zod";
// Schemas
import { architraveSchema } from "../architrave.schema";

export type ArchitraveSchema = z.infer<typeof architraveSchema>;
