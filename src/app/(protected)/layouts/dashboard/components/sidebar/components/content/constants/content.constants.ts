// Icons
import {
  ChartLine,
  DoorClosed,
  Bolt,
  Home,
  Settings,
  Settings2,
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
    title: "Opciones de clientes",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "Formas de pago",
        url: "/customer-options/payment-methods",
      },
      {
        title: "Departamentos",
        url: "/customer-options/departments",
      },
      {
        title: "Cargos",
        url: "/customer-options/positions",
      },
    ],
  },
  {
    title: "Herrajes",
    url: "/hardwares",
    icon: Bolt,
    items: [],
  },
  {
    title: "Opciones de herrajes",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "Tipos de herrajes",
        url: "/hardwares/options/types",
      },
      {
        title: "Acabados de herrajes",
        url: "/hardwares/options/finishes",
      },
    ],
  },
  {
    title: "Puertas",
    url: "/doors",
    icon: DoorClosed,
  },
  {
    title: "Opciones de puertas",
    url: "#",
    icon: Settings2,
    items: [
      {
        title: "Tipos de puertas",
        url: "/doors/options/types",
      },
      {
        title: "Acabados de puertas",
        url: "/doors/options/finishes",
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
