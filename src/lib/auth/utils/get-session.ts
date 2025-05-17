// Vendors
import { redirect } from "next/navigation";
// Libs
import { auth } from "@/lib/auth/auth";
// Types
import type { Session } from "next-auth";

const getSession = async (): Promise<Session> => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return session!;
};

export { getSession };
