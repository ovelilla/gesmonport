// Vendors
import * as z from "zod";
// Schemas
import { doorSchema } from "../door.schema";

export type DoorSchema = z.infer<typeof doorSchema>;
