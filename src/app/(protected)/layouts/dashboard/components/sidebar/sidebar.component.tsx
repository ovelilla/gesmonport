// Components
import {
  Sidebar as SidebarComponent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";
// Types
import type { SidebarProps } from "./types/sidebar.component.types";

const Sidebar = ({ session }: SidebarProps) => {
  return (
    <SidebarComponent collapsible="icon">
      <Header session={session} />
      <Content />
      <SidebarRail />
    </SidebarComponent>
  );
};

export { Sidebar };
