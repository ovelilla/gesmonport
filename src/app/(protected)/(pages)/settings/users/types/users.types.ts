import { User as PrismaUser } from "@/generated/prisma";

type User = Pick<PrismaUser, "id" | "name" | "email" | "role" | "isAuthorized">;

export type { User };
