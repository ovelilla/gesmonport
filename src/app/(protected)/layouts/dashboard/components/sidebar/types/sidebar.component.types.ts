// Types
import type { Session } from "next-auth";

type SidebarProps = {
  open: boolean;
  session: Session;
};

export type { SidebarProps };
