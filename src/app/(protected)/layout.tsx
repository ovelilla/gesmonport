// Actions
import { readHardwareTypes } from "./layouts/dashboard/actions/dashboard.actions";
// Layouts
import { DashboardLayout } from "./layouts/dashboard/dashboard.layout";
// Libs
import { getSession } from "@/lib/auth/utils/get-session";
// Styles
import "./layout.css";
// Types
import { ProtectedLayoutProps } from "./types/layout.types";

async function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const session = await getSession();

  const hardwareTypes = await readHardwareTypes();

  return (
    <DashboardLayout hardwareTypes={hardwareTypes} session={session}>
      {children}
    </DashboardLayout>
  );
}

export default ProtectedLayout;
