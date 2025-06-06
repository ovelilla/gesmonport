// Vendors
import Link from "next/link";
// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, Eye, SquarePen, Trash2 } from "lucide-react";
// Types
import type { Customer } from "../../types/customers.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/customers.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleEdit,
  handleNavigate,
}: GetColumnsConfigProps<Customer>): GetColumnsConfigReturn<Customer> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      accessorKey: "customerNumber",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Nº Cliente" />
      ),
      meta: "Nº Cliente",
    },
    {
      accessorKey: "name",
      cell: ({ row }) => (
        <Link href={`/customers/${row.original.id}`} prefetch={false}>
          {row.original.name}
        </Link>
      ),
      header: ({ column }) => <ColumnSorter column={column} label="Nombre" />,
      meta: "Nombre",
    },
    {
      accessorKey: "legalName",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Razón social" />
      ),
      meta: "Razón social",
    },
    {
      accessorKey: "vatNumber",
      header: ({ column }) => <ColumnSorter column={column} label="CIF" />,
      meta: "CIF",
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
      cell: ({ row }) => (
        <RowActions
          row={row}
          button={{
            ariaLabel: "Abrir menú de acciones",
            icon: Ellipsis,
          }}
          actions={[
            { icon: Eye, label: "Ver cliente", onClick: handleNavigate },
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
