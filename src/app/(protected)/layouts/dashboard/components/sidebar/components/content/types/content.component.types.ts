// Types
import type { HardwareType } from "@/app/(protected)/layouts/dashboard/types/dashboard.types";

type ContentProps = {
  hardwareTypes: HardwareType[];
};

type NavigationType = {
  title: string;
  url?: string;
  icon?: React.FC;
  items?: NavigationType[];
};

export type { ContentProps, NavigationType };
