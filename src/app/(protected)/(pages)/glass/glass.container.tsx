"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { GlassForm } from "./components/form/form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { GlassHook } from "./hooks/glass.hook";
// Types
import type { GlassProps } from "./types/glass.container.types";

const GlassContainer = ({
  families,
  finishes,
  glass,
  models,
  types,
}: GlassProps) => {
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
  } = GlassHook({ glass });

  return (
    <div className="flex grow flex-col gap-2 overflow-hidden p-4">
      <h1 className="text-2xl font-medium">Vidrios</h1>
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un vidrio.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} vidrio`}
      >
        <GlassForm
          existingImages={existingImages}
          families={families}
          finishes={finishes}
          form={form}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
          models={models}
          newImages={newImages}
          setExistingImages={setExistingImages}
          setNewImages={setNewImages}
          setToDelete={setToDelete}
          toDelete={toDelete}
          types={types}
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
        description={`¿Estás seguro de que quieres eliminar ${selectedRows.length > 1
          ? "los vidrios seleccionados"
          : "el vidrio seleccionado"
          }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "vidrios" : "vidrio"}`}
      />
    </div>
  );
};

export { GlassContainer };
