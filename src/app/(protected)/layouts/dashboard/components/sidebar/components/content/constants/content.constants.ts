// Icons
import { ChartLine, Home, Settings, Settings2, Users } from "lucide-react";

const NAVIGATION = [
  {
    title: "Principal",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Clientes",
    url: "/customers",
    icon: Users,
  },
  {
    title: "Parámetros",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "Tipos de puertas",
        url: "/parameters/types",
      },
    ],
  },
  {
    title: "Administración",
    url: "#",
    icon: ChartLine,
    items: [
      {
        title: "Presupuestos",
        url: "/finance/budgets",
      },
    ],
  },
  {
    title: "Ajustes",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "Usuarios",
        url: "/settings/users",
      },
    ],
  },
];

export { NAVIGATION };
