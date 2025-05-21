"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { CustomerForm } from "./components/form/form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { CustomersHook } from "./hooks/customers.hook";
// Types
import type { CustomersProps } from "./types/customers.container.types";

const CustomersContainer = ({ customers }: CustomersProps) => {
  const {
    columns,
    data,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
  } = CustomersHook({ customers });

  return (
    <div className="flex flex-1 flex-col gap-2 overflow-hidden p-4">
      <h1 className="text-2xl font-medium">Clientes</h1>
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un cliente.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} cliente`}
      >
        <CustomerForm
          form={form}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
        />
      </DialogWrapper>
      <AlertDialogWrapper
        action={{
          onClick: selectedRows.length
            ? handleSubmitDeleteMultiple
            : handleSubmitDelete,
          label: "Eliminar",
        }}
        cancel={{
          label: "Cancelar",
        }}
        description={`¿Estás seguro de que quieres eliminar ${
          selectedRows.length > 1
            ? "los clientes seleccionados"
            : "el cliente seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "clientes" : "cliente"}`}
      />
    </div>
  );
};

export { CustomersContainer };
