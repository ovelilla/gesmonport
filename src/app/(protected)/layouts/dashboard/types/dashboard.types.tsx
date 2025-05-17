// Types
import type { Session } from "next-auth";

type DashboardProps = {
  children: React.ReactNode;
  session: Session;
};

export type { DashboardProps };
