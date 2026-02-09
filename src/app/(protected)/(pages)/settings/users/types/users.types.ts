import { User as PrismaUser } from "@/generated/prisma/client";

type User = Pick<PrismaUser, "id" | "name" | "email" | "role" | "isAuthorized">;

export type { User };
