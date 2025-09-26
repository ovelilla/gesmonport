"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { ExtraForm } from "./components/form/form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { ExtrasHook } from "./hooks/extras.hook";
// Types
import type { ExtrasProps } from "./types/extras.container.types";

const ExtrasContainer = ({ extras }: ExtrasProps) => {
  const {
    columns,
    data,
    existingImages,
    form,
    handleCreate,
    handleOpenChangeAlertDialog,
    handleOpenChangeDialog,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    multipleSelectActionsProps,
    newImages,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setExistingImages,
    setNewImages,
    setToDelete,
    toDelete,
  } = ExtrasHook({ extras });

  return (
    <div className="flex grow flex-col gap-2 overflow-hidden p-4">
      <h1 className="text-2xl font-medium">Extras de puertas</h1>
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un extra.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} extra`}
      >
        <ExtraForm
          existingImages={existingImages}
          form={form}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
          newImages={newImages}
          setExistingImages={setExistingImages}
          setNewImages={setNewImages}
          setToDelete={setToDelete}
          toDelete={toDelete}
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
            ? "los extras seleccionados"
            : "el extra seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "extras" : "extra"}`}
      />
    </div>
  );
};

export { ExtrasContainer };
