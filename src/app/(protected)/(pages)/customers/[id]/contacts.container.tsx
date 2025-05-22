"use client";
// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { ContactForm } from "./components/form/form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { Detail } from "./components/detail/detail.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Hooks
import { ContactsHook } from "./hooks/contacts.hook";
// Types
import type { ContactsProps } from "./types/contacts.container.types";

const ContactsContainer = ({ customer, contacts }: ContactsProps) => {
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
  } = ContactsHook({ contacts });

  if (!customer) {
    return <div>Cliente no encontrado</div>;
  }

  return (
    <div className="flex grow flex-col gap-2 p-4">
      <h1 className="text-xl font-semibold">{customer.name}</h1>
      <Tabs defaultValue="details" className="flex-1 gap-4 overflow-hidden">
        <TabsList className="bg-background h-10 w-full shrink-0 justify-start rounded-none border-b p-0">
          <TabsTrigger
            className="data-[state=active]:border-primary flex-0 rounded-none border-0 border-b-2 data-[state=active]:shadow-none"
            value="details"
          >
            Detalles
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:border-primary flex-0 rounded-none border-0 border-b-2 data-[state=active]:shadow-none"
            value="contacts"
          >
            Contactos
          </TabsTrigger>
        </TabsList>
        <TabsContent className="overflow-auto" value="details">
          <Detail customer={customer} />
        </TabsContent>
        <TabsContent className="flex overflow-hidden" value="contacts">
          <DataTable
            columns={columns}
            data={data}
            initialColumnVisibility={{}}
            multipleSelectActionsProps={multipleSelectActionsProps}
            onCreateRecord={handleCreate}
          />
        </TabsContent>
      </Tabs>

      <DialogWrapper
        description={`Rellena los campos para ${selectedRow ? "editar" : "crear"} un contacto.`}
        onOpenChange={handleOpenChangeDialog}
        open={openDialog}
        title={`${selectedRow ? "Editar" : "Crear"} contacto`}
      >
        <ContactForm
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
            ? "los contactos seleccionados"
            : "el contacto seleccionado"
        }?`}
        open={openAlert}
        onOpenChange={handleOpenChangeAlertDialog}
        title={`Eliminar ${selectedRows.length > 1 ? "contactos" : "contacto"}`}
      />
    </div>
  );
};

export { ContactsContainer };
