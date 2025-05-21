import { Customer as PrismaCustomer } from "@prisma/client";

// type Customer = Omit<PrismaCustomer, "createdAt" | "updatedAt">;
type Customer = PrismaCustomer;

export type { Customer };
