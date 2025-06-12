"use client";
// Vendors
import { usePathname } from "next/navigation";
// Components
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SidebarMenuRecursiveItem } from "./components/sidebar-menu-recursive-item/sidebar-menu-recursive-item.component";
// Config
import { getNavigation } from "./config/content.config";
// Types
import { ContentProps } from "./types/content.component.types";

const Content = ({ hardwareTypes }: ContentProps) => {
  const pathname = usePathname();
  const navigation = getNavigation(hardwareTypes);

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Secciones</SidebarGroupLabel>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuRecursiveItem
              key={item.title}
              item={item}
              pathname={pathname}
            />
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};

export { Content };
