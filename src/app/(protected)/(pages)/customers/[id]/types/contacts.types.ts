import type {
  Customer as PrismaCustomer,
  Contact as PrismaContact,
  Department as PrismaDepartment,
  PaymentMethod as PrismaPaymentMethod,
  Position as PrismaPosition,
} from "@prisma/client";

type Contact = PrismaContact & {
  department: PrismaDepartment | null;
  position: PrismaPosition | null;
};

type Customer = PrismaCustomer & {
  paymentMethod: PrismaPaymentMethod | null;
};

type Department = PrismaDepartment;

type Position = PrismaPosition;

export type { Contact, Customer, Department, Position };
