// Vendors
import * as z from "zod";
// Schemas
import { departmentSchema } from "../department.schema";

export type DepartmentSchema = z.infer<typeof departmentSchema>;
