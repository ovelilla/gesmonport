import { User as PrismaUser } from "@prisma/client";

type User = Pick<PrismaUser, "id" | "name" | "email" | "role" | "isAuthorized">;

export type { User };
