// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
// Types
import type { Contact } from "../../types/contacts.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/contacts.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleEdit,
}: GetColumnsConfigProps<Contact>): GetColumnsConfigReturn<Contact> {
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
      header: ({ column }) => (
        <ColumnSorter column={column} label="Correo electrónico" />
      ),
      meta: "Correo electrónico",
    },
    {
      accessorKey: "phone",
      header: ({ column }) => <ColumnSorter column={column} label="Teléfono" />,
      meta: "Teléfono",
    },
    {
      accessorFn: (row) => row.department?.name ?? "",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Departamento" />
      ),
      id: "department",
      meta: "Departamento",
    },
    {
      accessorFn: (row) => row.position?.name ?? "",
      header: ({ column }) => <ColumnSorter column={column} label="Cargo" />,
      id: "position",
      meta: "Cargo",
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
