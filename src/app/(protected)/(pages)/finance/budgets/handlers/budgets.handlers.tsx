// Vendors
import { format } from "date-fns";
// import { toast } from "sonner";
// Actions
import {
  //   createCustomer,
  //   deleteCustomer,
  //   deleteMultipleBudgets,
  generateUniqueRandomNumber,
  //   updateCustomer,
} from "../actions/budgets.actions";
// Types
import type {
  BudgetsHandlersProps,
  BudgetsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  NavigateHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
} from "./types/budgets.handlers.types";

const createHandler = async ({
  form,
  setOpenDialog,
}: CreateHandlerProps): Promise<void> => {
  const date = format(new Date(), "yyyy-MM-dd");
  form.setValue("date", date);
  const uniqueRandomNumber = await generateUniqueRandomNumber();
  form.setValue("number", uniqueRandomNumber);
  setOpenDialog(true);
};

const deleteHandler = ({
  row,
  setSelectedRow,
  setOpenAlert,
}: DeleteHandlerProps): void => {
  setSelectedRow(row);
  setOpenAlert(true);
};

const deleteMultipleHandler = ({
  rows,
  setSelectedRows,
  setOpenAlert,
}: DeleteMultipleHandlerProps): void => {
  setSelectedRows(rows);
  setOpenAlert(true);
};

const editHandler = ({
  form,
  row,
  setSelectedRow,
  setOpenDialog,
}: EditHandlerProps): void => {
  const transformedRow = {
    ...row,
  };
  form.reset(transformedRow, { keepDefaultValues: true });
  setSelectedRow(row);
  setOpenDialog(true);
};

const navigateHandler = ({ row, router }: NavigateHandlerProps): void => {
  router.push(`/budgets/${row.id}`);
};

const openChangeAlertDialogHandler = ({
  open,
  selectedRow,
  selectedRows,
  setOpenAlert,
  setSelectedRow,
  setSelectedRows,
}: OpenChangeAlertDialogHandlerProps): void => {
  setOpenAlert(open);

  if (!open && selectedRow) {
    setSelectedRow(null);
  }

  if (!open && selectedRows.length) {
    setSelectedRows([]);
  }
};

const openChangeDialogHandler = ({
  form,
  open,
  setOpenDialog,
  setSelectedRow,
}: OpenChangeDialogHandlerProps): void => {
  form.reset();
  setOpenDialog(open);
  setSelectedRow(null);
};

const submitHandler = ({
  form,
  selectedRow,
  setData,
  setLoading,
  setOpenDialog,
  setSelectedRow,
  values,
}: SubmitHandlerProps): void => {
  if (selectedRow) {
    submitHandlerEdit({
      selectedRow,
      form,
      setData,
      setLoading,
      setOpenDialog,
      setSelectedRow,
      values,
    });
  } else {
    submitHandlerCreate({
      form,
      setData,
      setLoading,
      setOpenDialog,
      values,
    });
  }
};

const submitHandlerCreate = async ({
  // form,
  // setData,
  setLoading,
  // setOpenDialog,
  // values,
}: SubmitHandlerCreateProps): Promise<void> => {
  setLoading(true);

  // try {
  //   const { client, error, success } = await createCustomer({ values });

  //   if (error) {
  //     toast.error(error);
  //     return;
  //   }

  //   if (success && client) {
  //     setData((prev) =>
  //       [...prev, client].sort((a, b) => a.name.localeCompare(b.name)),
  //     );
  //     form.reset();
  //     setOpenDialog(false);
  //     toast.success(success);
  //   }
  // } catch (error) {
  //   console.error("Error in submitHandlerCreate:", error);
  //   toast.error("Error al crear el presupuesto. Por favor, inténtalo de nuevo");
  // } finally {
  //   setLoading(false);
  // }
};

const submitHandlerEdit = async ({
  // form,
  selectedRow,
  // setData,
  setLoading,
  // setOpenDialog,
  // setSelectedRow,
  // values,
}: SubmitHandlerEditProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setLoading(true);

  // try {
  //   const { client, error, success } = await updateCustomer({
  //     id: selectedRow.id,
  //     values,
  //   });

  //   if (error) {
  //     toast.error(error);
  //     return;
  //   }

  //   if (success && client) {
  //     setData((prev) =>
  //       prev
  //         .map((item) => (item.id === client.id ? client : item))
  //         .sort((a, b) => a.name.localeCompare(b.name)),
  //     );
  //     form.reset();
  //     setOpenDialog(false);
  //     setSelectedRow(null);
  //     toast.success(success);
  //   }
  // } catch (error) {
  //   console.error("Error in submitHandlerEdit:", error);
  //   toast.error(
  //     "Error al actualizar el presupuesto. Por favor, inténtalo de nuevo",
  //   );
  // } finally {
  //   setLoading(false);
  // }
};

const submitHandlerDelete = async ({
  selectedRow,
  // setData,
  setLoading,
}: SubmitHandlerDeleteProps): Promise<void> => {
  if (!selectedRow) {
    return;
  }

  setLoading(true);

  // try {
  //   const { success, error } = await deleteCustomer({ id: selectedRow.id });

  //   if (error) {
  //     toast.error(error);
  //     return;
  //   }

  //   if (success) {
  //     setData((prev) => prev.filter((item) => item.id !== selectedRow.id));
  //     toast.success(success);
  //   }
  // } catch (error) {
  //   console.error(error);
  //   toast.error("Error al eliminar el presupuesto. Por favor, inténtalo de nuevo");
  // } finally {
  //   setLoading(false);
  // }
};

const submitHandlerDeleteMultiple = async ({
  // selectedRows,
  // setData,
  setLoading,
  // setSelectedRows,
}: SubmitHandlerDeleteMultipleProps): Promise<void> => {
  setLoading(true);
  // try {
  //   const { success, error } = await deleteMultipleBudgets({
  //     ids: selectedRows.map((row) => row.id),
  //   });

  //   if (error) {
  //     toast.error(error);
  //     return;
  //   }

  //   if (success) {
  //     setData((prev) =>
  //       prev.filter((item) => !selectedRows.some((row) => row.id === item.id)),
  //     );
  //     toast.success(success);
  //     setSelectedRows([]);
  //   }
  // } catch (error) {
  //   console.error(error);
  //   toast.error(
  //     "Error al eliminar los presupuestos. Por favor, inténtalo de nuevo",
  //   );
  // } finally {
  //   setLoading(false);
  // }
};

const BudgetsHandlers = ({
  form,
  router,
  selectedRow,
  selectedRows,
  setData,
  setLoading,
  setOpenAlert,
  setOpenDialog,
  setSelectedRow,
  setSelectedRows,
}: BudgetsHandlersProps): BudgetsHandlersReturn => {
  return {
    handleCreate: () => createHandler({ form, setOpenDialog }),
    handleDelete: (row) => deleteHandler({ row, setSelectedRow, setOpenAlert }),
    handleDeleteMultiple: (rows) =>
      deleteMultipleHandler({ rows, setSelectedRows, setOpenAlert }),
    handleEdit: (row) =>
      editHandler({
        form,
        row,
        setSelectedRow,
        setOpenDialog,
      }),
    handleNavigate: (row) => navigateHandler({ row, router }),
    handleOpenChangeAlertDialog: (open) =>
      openChangeAlertDialogHandler({
        open,
        selectedRow,
        selectedRows,
        setSelectedRow,
        setSelectedRows,
        setOpenAlert,
      }),
    handleOpenChangeDialog: (open) =>
      openChangeDialogHandler({
        form,
        open,
        setOpenDialog,
        setSelectedRow,
      }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        selectedRow,
        setData,
        setLoading,
        setOpenDialog,
        setSelectedRow,
        values,
      }),
    handleSubmitDelete: () =>
      submitHandlerDelete({ selectedRow, setData, setLoading }),
    handleSubmitDeleteMultiple: () =>
      submitHandlerDeleteMultiple({
        selectedRows,
        setData,
        setLoading,
        setSelectedRows,
      }),
  };
};

export { BudgetsHandlers };
