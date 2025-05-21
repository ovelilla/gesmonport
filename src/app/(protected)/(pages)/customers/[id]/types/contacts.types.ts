import type {
  Customer as PrismaCustomer,
  Contact as PrismaContact,
} from "@prisma/client";

type Contact = PrismaContact;

type Customer = PrismaCustomer;

export type { Contact, Customer };
