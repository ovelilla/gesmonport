"use client";
// Vendors
import Link from "next/link";
// Components
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
// Icons
import { ChevronRight } from "lucide-react";
// Types
import { SidebarMenuRecursiveItemProps } from "./types/sidebar-menu-recursive-item.component.types";
// Utils
import { hasActiveChild, isActiveItem } from "../../utils/content.utils";

const SidebarMenuRecursiveItem = ({
  item,
  pathname,
  level = 0,
}: SidebarMenuRecursiveItemProps) => {
  const isOpen = hasActiveChild({ item, pathname });
  const isActive = isActiveItem({ item, pathname });
  const hasChildren = item.items && item.items.length > 0;

  const paddingClass = level > 0 ? `pl-${level * 2}` : "";

  if (hasChildren) {
    const Wrapper = level === 0 ? SidebarMenuItem : SidebarMenuSubItem;

    return (
      <Collapsible className={paddingClass} defaultOpen={isOpen} asChild>
        <Wrapper>
          <CollapsibleTrigger asChild>
            {level === 0 ? (
              <SidebarMenuButton
                tooltip={item.title}
                className="group/collapsible"
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            ) : (
              <SidebarMenuSubButton className="group/collapsible">
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuSubButton>
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items!.map((child) => (
                <SidebarMenuRecursiveItem
                  key={child.title}
                  item={child}
                  pathname={pathname}
                  level={level + 1}
                />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Wrapper>
      </Collapsible>
    );
  }

  if (item.url) {
    const Wrapper = level === 0 ? SidebarMenuItem : SidebarMenuSubItem;
    const Button = level === 0 ? SidebarMenuButton : SidebarMenuSubButton;

    return (
      <Wrapper key={item.title} className={paddingClass}>
        <Button asChild isActive={isActive}>
          <Link href={item.url} prefetch={false}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </Link>
        </Button>
      </Wrapper>
    );
  }

  const PlainWrapper = level === 0 ? SidebarMenuItem : SidebarMenuSubItem;
  const PlainButton = level === 0 ? SidebarMenuButton : SidebarMenuSubButton;

  return (
    <PlainWrapper key={item.title} className={paddingClass}>
      <PlainButton isActive={false}>
        <span>{item.title}</span>
      </PlainButton>
    </PlainWrapper>
  );
};

export { SidebarMenuRecursiveItem };
