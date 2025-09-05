"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { DoorForm } from "./components/form/form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { DoorsHook } from "./hooks/doors.hook";
// Types
import type { DoorsProps } from "./types/doors.container.types";

const DoorsContainer = ({
  families,
  finishes,
  doors,
  glass,
  types,
}: DoorsProps) => {
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
  } = DoorsHook({ doors });

  return (
    <div className="flex grow flex-col gap-2 overflow-hidden p-4">
      <h1 className="text-2xl font-medium">Puertas</h1>
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un puerta.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} puerta`}
      >
        <DoorForm
          existingImages={existingImages}
          families={families}
          finishes={finishes}
          form={form}
          glass={glass}
          handleSubmit={handleSubmit}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
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
          ? "los puertas seleccionados"
          : "el puerta seleccionado"
          }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "puertas" : "puerta"}`}
      />
    </div>
  );
};

export { DoorsContainer };
