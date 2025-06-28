// Vendors
import Image from "next/image";
import Link from "next/link";
// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, Eye, SquarePen, Trash2 } from "lucide-react";
// Types
import type { Architrave } from "../../types/architraves.types";
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/architraves.hook.utils.types";

function getColumnsConfig({
  handleDelete,
  handleEdit,
  handleNavigate,
}: GetColumnsConfigProps<Architrave>): GetColumnsConfigReturn<Architrave> {
  return [
    {
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      enableHiding: false,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
      id: "selection",
    },
    {
      cell: ({ row }) => (
        <Link href={`/architraves/${row.original.id}`} prefetch={false}>
          <div className="relative m-2 size-16">
            <Image
              alt="Imagen de la moldura"
              className="rounded-md object-contain"
              fill={true}
              priority={true}
              sizes="64px"
              src={`https://res.cloudinary.com/dwdtaut74/image/upload/f_auto,q_auto,w_64,h_64,c_fit/v1/${row.original.images[0]?.publicId ?? "no-image_lpojgp"}`}
              unoptimized={true}
            />
          </div>
        </Link>
      ),
      header: "Imagen",
      meta: "Imagen",
    },
    {
      accessorKey: "name",
      header: ({ column }) => <ColumnSorter column={column} label="Nombre" />,
      meta: "Nombre",
    },
    {
      accessorKey: "description",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Descripción" />
      ),
      meta: "Descripción",
    },
    {
      accessorKey: "reference",
      header: ({ column }) => (
        <ColumnSorter column={column} label="Referencia" />
      ),
      meta: "Referencia",
    },
    {
      accessorKey: "family",
      header: ({ column }) => <ColumnSorter column={column} label="Familia" />,
      cell: ({ row }) => row.original.family.name,
      meta: "Familia",
    },
    {
      accessorKey: "finish",
      header: ({ column }) => <ColumnSorter column={column} label="Acabado" />,
      cell: ({ row }) => row.original.finish.name,
      meta: "Acabado",
    },
    {
      accessorKey: "type",
      header: ({ column }) => <ColumnSorter column={column} label="Tipo" />,
      cell: ({ row }) => row.original.type.name,
      meta: "Tipo",
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
            { icon: Eye, label: "Ver tapajunta", onClick: handleNavigate },
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
