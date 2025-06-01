// Vendors
import * as z from "zod";
// Schemas
import { hardwareSchema } from "../hardware.schema";

type HardwareSchema = z.infer<typeof hardwareSchema>;

export type { HardwareSchema };
