// Types
import type { HardwareType } from "@/app/(protected)/layouts/dashboard/types/dashboard.types";
import type { Session } from "next-auth";

type SidebarProps = {
  hardwareTypes: HardwareType[];
  open: boolean;
  session: Session;
};

export type { SidebarProps };
