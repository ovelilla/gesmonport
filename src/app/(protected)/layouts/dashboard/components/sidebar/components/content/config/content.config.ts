// Icons
import {
  Bolt,
  ChartLine,
  DoorClosed,
  Frame,
  Home,
  Rows4,
  Settings,
  Settings2,
  Users,
} from "lucide-react";
// Types
import type { HardwareType } from "@/app/(protected)/layouts/dashboard/types/dashboard.types";
import type { NavigationType } from "../types/content.component.types";

const getNavigation = (hardwareTypes: HardwareType[]): NavigationType[] => [
  {
    title: "Principal",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Clientes",
    icon: Users,
    items: [
      {
        title: "Lista de clientes",
        icon: Rows4,
        url: "/customers",
      },
      {
        title: "Opciones",
        icon: Settings2,
        items: [
          {
            title: "Formas de pago",
            url: "/customers/options/payment-methods",
          },
          {
            title: "Departamentos",
            url: "/customers/options/departments",
          },
          {
            title: "Cargos",
            url: "/customers/options/positions",
          },
        ],
      },
    ],
  },
  {
    title: "Herrajes",
    icon: Bolt,
    items: [
      {
        title: "Herrajes por tipo",
        items: hardwareTypes.map(({ name, slug }) => ({
          title: name,
          url: `/hardwares/type/${slug}`,
        })),
      },
      {
        title: "Opciones",
        icon: Settings2,
        items: [
          {
            title: "Tipos",
            url: "/hardwares/options/types",
          },
          {
            title: "Acabados",
            url: "/hardwares/options/finishes",
          },
        ],
      },
    ],
  },
  {
    title: "Marcos",
    icon: Frame,
    items: [
      {
        title: "Lista de marcos",
        icon: Rows4,
        url: "/frames",
      },
      {
        title: "Opciones",
        icon: Settings2,
        items: [
          {
            title: "Familias",
            url: "/frames/options/families",
          },
          {
            title: "Tipos",
            url: "/frames/options/types",
          },
          {
            title: "Acabados",
            url: "/frames/options/finishes",
          },
        ],
      },
    ],
  },
  {
    title: "Puertas",
    icon: DoorClosed,
    items: [
      {
        title: "Lista de puertas",
        icon: Rows4,
        url: "/doors",
      },
      {
        title: "Opciones",
        icon: Settings2,
        items: [
          {
            title: "Familias",
            url: "/doors/options/families",
          },
          {
            title: "Tipos",
            url: "/doors/options/types",
          },
          {
            title: "Acabados",
            url: "/doors/options/finishes",
          },
        ],
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

export { getNavigation };
