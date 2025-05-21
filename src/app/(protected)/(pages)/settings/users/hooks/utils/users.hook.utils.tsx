// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
// Types
import type { User } from "../../types/users.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/users.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleEdit,
}: GetColumnsConfigProps<User>): GetColumnsConfigReturn<User> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      accessorKey: "name",
      header: ({ column }) => <ColumnSorter column={column} label="Nombre" />,
      meta: "Nombre",
    },
    {
      accessorKey: "email",
      header: ({ column }) => <ColumnSorter column={column} label="Email" />,
      meta: "Email",
    },
    {
      accessorKey: "isAuthorized",
      cell: ({ row }) => {
        const isAuthorized = row.original.isAuthorized;

        return <div>{isAuthorized ? "Sí" : "No"}</div>;
      },
      header: ({ column }) => (
        <ColumnSorter column={column} label="Autorizado" />
      ),
      meta: "Autorizado",
    },
    {
      accessorKey: "role",
      cell: ({ row }) => {
        const roleMap: Record<"ADMIN" | "USER", string> = {
          ADMIN: "Administrador",
          USER: "Usuario",
        };
        return <div>{roleMap[row.original.role as "ADMIN" | "USER"]}</div>;
      },
      header: ({ column }) => <ColumnSorter column={column} label="Rol" />,
      meta: "Rol",
    },
    {
      cell: ({ row }) => (
        <RowActions
          row={row}
          button={{
            ariaLabel: "Abrir menú de acciones",
            icon: Ellipsis,
          }}
          actions={[
            { icon: SquarePen, label: "Editar", onClick: handleEdit },
            { icon: Trash2, label: "Eliminar", onClick: handleDelete },
          ]}
        />
      ),
      enableHiding: false,
      header: "Acciones",
      id: "actions",
    },
  ];
}

function getMultipleSelectActionsProps<TData>({
  handleDeleteMultiple,
}: GetMultipleSelectActionsProps<TData>): GetMultipleSelectActionsReturn<TData> {
  return {
    button: {
      ariaLabel: "Abrir menú de acciones",
      icon: Ellipsis,
    },
    actions: [
      {
        icon: Trash2,
        label: "Eliminar seleccionados",
        onClick: handleDeleteMultiple,
      },
    ],
  };
}

export { getColumnsConfig, getMultipleSelectActionsProps };
