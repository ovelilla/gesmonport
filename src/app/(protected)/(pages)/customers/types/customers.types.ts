import {
  Customer as PrismaCustomer,
  PaymentMethod as PrismaPaymentMethod,
} from "@/generated/prisma/client";

type Customer = PrismaCustomer;

type PaymentMethod = PrismaPaymentMethod;

export type { Customer, PaymentMethod };
