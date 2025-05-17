import { Customer as PrismaCustomer } from "@prisma/client";

type Customer = Omit<PrismaCustomer, "createdAt" | "updatedAt">;

export type { Customer };
