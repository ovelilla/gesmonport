// Vendors
import * as z from "zod";
// Schemas
import { budgetSchema } from "../budgets.schemas";

type BudgetSchema = z.infer<typeof budgetSchema>;

export type { BudgetSchema };
