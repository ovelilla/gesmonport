// Icons
import {
  ChartLine,
  Home,
  Settings,
  Settings2,
  UserCog,
  Users,
} from "lucide-react";

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
    title: "Ajustes clientes",
    url: "#",
    icon: UserCog,
    items: [
      {
        title: "Formas de pago",
        url: "/customer-settings/payment-methods",
      },
      {
        title: "Departamentos",
        url: "/customer-settings/departments",
      },
      {
        title: "Cargos",
        url: "/customer-settings/positions",
      },
    ],
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
      {
        title: "Acabados",
        url: "/parameters/finishes",
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
