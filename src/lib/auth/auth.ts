// Vendors
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
// Config
import authConfig from "@/lib/auth/config/auth.config";
// Libs
import { prisma } from "@/lib/db/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: "/signin",
    error: "/auth-error",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user }) {
      const existingUser = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          id: true,
          emailVerified: true,
        },
      });

      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }

      return true;
    },
    async session({ token, session }) {
      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
  ...authConfig,
});
