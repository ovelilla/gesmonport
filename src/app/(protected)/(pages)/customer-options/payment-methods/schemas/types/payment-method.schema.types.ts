// Vendors
import * as z from "zod";
// Schemas
import { paymentMethodSchema } from "../payment-method.schema";

export type PaymentMethodSchema = z.infer<typeof paymentMethodSchema>;
