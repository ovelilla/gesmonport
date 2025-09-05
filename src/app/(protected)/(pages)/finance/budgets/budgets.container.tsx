"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { BudgetForm } from "./components/form/form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Hooks
import { BudgetsHook } from "./hooks/budgets.hook";
// Types
import type { BudgetsProps } from "./types/budgets.container.types";

const BudgetsContainer = ({
  architraves,
  budgets,
  customers,
  doors,
  frames,
  hardwares,
  paymentMethods,
}: BudgetsProps) => {
  const {
    columns,
    data,
    fieldArray,
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
  } = BudgetsHook({ budgets });

  return (
    <div className="flex grow flex-col gap-2 overflow-hidden p-4">
      <h1 className="text-2xl font-medium">Presupuestos</h1>
      <DataTable
        columns={columns}
        data={data}
        initialColumnVisibility={{}}
        multipleSelectActionsProps={multipleSelectActionsProps}
        onCreateRecord={handleCreate}
      />
      <DialogWrapper
        className="w-full max-w-full sm:h-dvh sm:rounded-none sm:border-none"
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un presupuesto.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} presupuesto`}
      >
        <BudgetForm
          architraves={architraves}
          customers={customers}
          doors={doors}
          fieldArray={fieldArray}
          form={form}
          frames={frames}
          handleSubmit={handleSubmit}
          hardwares={hardwares}
          label={selectedRow ? "Editar" : "Crear"}
          loading={loading}
          paymentMethods={paymentMethods}
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
            ? "los presupuestos seleccionados"
            : "el presupuesto seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "presupuestos" : "presupuesto"}`}
      />
    </div>
  );
};

export { BudgetsContainer };
