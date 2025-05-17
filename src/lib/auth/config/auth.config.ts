// Vendors
import { CredentialsSignin } from "next-auth";
import bcryptjs from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { signInSchema } from "@/app/(auth)/(pages)/signin/schemas/signin.schema";
// Types
import type { NextAuthConfig } from "next-auth";

class CustomAuthError extends CredentialsSignin {
  constructor(code: string) {
    super();
    this.message = code;
    this.stack = undefined;
  }
}

export default {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = await signInSchema.parseAsync(credentials);

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !user.password) {
          throw new CustomAuthError("Credenciales inválidas");
        }

        const passwordMatch = await bcryptjs.compare(password, user.password);

        if (!passwordMatch) {
          throw new CustomAuthError("Credenciales inválidas");
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
