"use client";
// Vendors
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
// Components
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
// Constants
import { NAVIGATION } from "./constants/content.constants";
// Icons
import { ChevronRight } from "lucide-react";
// Types
import { ContentProps } from "./types/content.component.types";

const Content = ({ hardwareTypes }: ContentProps) => {
  const pathname = usePathname();

  const navigation = useMemo(() => {
    return NAVIGATION.map((item) => {
      if (item.title !== "Herrajes") return item;

      const dynamicItems = hardwareTypes.map(({ name, slug }) => ({
        title: name,
        url: `/hardwares/type/${slug}`,
      }));

      return {
        ...item,
        items: [...(item.items || []), ...dynamicItems],
      };
    });
  }, [hardwareTypes]);

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Secciones</SidebarGroupLabel>
        <SidebarMenu>
          {navigation.map((item) => {
            const isActive =
              pathname === item.url ||
              pathname.startsWith(`${item.url}/`) ||
              item.items?.some((subItem) => pathname.startsWith(subItem.url));
            const isCollapsible = item.items && item.items.length > 0;

            return isCollapsible ? (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => {
                        const isActive = pathname === subItem.url;
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild isActive={isActive}>
                              <Link href={subItem.url} prefetch={false}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={item.url} prefetch={false}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};

export { Content };
