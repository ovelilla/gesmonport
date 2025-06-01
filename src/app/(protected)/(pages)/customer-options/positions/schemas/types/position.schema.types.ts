// Vendors
import * as z from "zod";
// Schemas
import { positionSchema } from "../position.schema";

export type PositionSchema = z.infer<typeof positionSchema>;
