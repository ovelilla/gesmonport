// Icons
import {
  Bolt,
  ChartLine,
  DoorClosed,
  Frame,
  Grid2x2,
  Home,
  Rows4,
  Settings,
  Settings2,
  SquareDashedBottom,
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
        title: "Tipos",
        url: "/frames/types",
      },
      {
        title: "Familias",
        url: "/frames/families",
      },
      {
        title: "Modelos",
        url: "/frames/models",
      },
      {
        title: "Acabados",
        url: "/frames/finishes",
      },
    ],
  },
  {
    title: "Tapajuntas",
    icon: SquareDashedBottom,
    items: [
      {
        title: "Tipos",
        url: "/architraves/types",
      },
      {
        title: "Familias",
        url: "/architraves/families",
      },
      {
        title: "Modelos",
        url: "/architraves/models",
      },
      {
        title: "Acabados",
        url: "/architraves/finishes",
      },
    ],
  },
  {
    title: "Vidrios",
    icon: Grid2x2,
    items: [
      {
        title: "Tipos",
        url: "/glass/types",
      },
      {
        title: "Familias",
        url: "/glass/families",
      },
      {
        title: "Modelos",
        url: "/glass/models",
      },
      {
        title: "Acabados",
        url: "/glass/finishes",
      },
    ],
  },
  {
    title: "Puertas",
    icon: DoorClosed,
    items: [
      {
        title: "Tipos",
        url: "/doors/types",
      },
      {
        title: "Familias",
        url: "/doors/families",
      },
      {
        title: "Modelos",
        url: "/doors/models",
      },
      {
        title: "Acabados",
        url: "/doors/finishes",
      },
      {
        title: "Extras",
        url: "/doors/extras",
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
