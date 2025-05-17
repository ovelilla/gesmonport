// Components
import { SidebarHeader, SidebarMenuButton } from "@/components/ui/sidebar";
// Icons
import { DoorClosed, ChevronsUpDown } from "lucide-react";
// Types
import type { HeaderProps } from "./types/header.component.types";

const Header = ({ session }: HeaderProps) => {
  const roles = {
    ADMIN: "Administrador",
    USER: "Usuario",
  };
  return (
    <SidebarHeader>
      <SidebarMenuButton
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        size="lg"
      >
        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
          <DoorClosed className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Gesmonport</span>
          <span className="truncate text-xs">{roles[session.user.role]}</span>
        </div>
        <ChevronsUpDown className="ml-auto" />
      </SidebarMenuButton>
    </SidebarHeader>
  );
};

export { Header };
