// Types
import type { HardwareType as PrismaHardwareType } from "@/generated/prisma/client";
import type { Session } from "next-auth";

type HardwareType = PrismaHardwareType;

type DashboardProps = {
  children: React.ReactNode;
  hardwareTypes: HardwareType[];
  session: Session;
};

export type { DashboardProps, HardwareType };
