// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { Position } from "../../types/positions.types";
import type { PositionSchema } from "../../schemas/types/position.schema.types";

type PositionsHandlersProps = {
  form: UseFormReturn<PositionSchema>;
  router: AppRouterInstance;
  selectedRow: Position | null;
  selectedRows: Position[];
  setData: Dispatch<SetStateAction<Position[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setOpenAlert: Dispatch<SetStateAction<boolean>>;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  setSelectedRow: Dispatch<SetStateAction<Position | null>>;
  setSelectedRows: Dispatch<SetStateAction<Position[]>>;
};

type PositionsHandlersReturn = {
  handleCreate: () => void;
  handleDelete: (row: Position) => void;
  handleDeleteMultiple: (rows: Position[]) => void;
  handleEdit: (row: Position) => void;
  handleOpenChangeAlertDialog: (open: boolean) => void;
  handleOpenChangeDialog: (open: boolean) => void;
  handleSubmit: (values: PositionSchema) => void;
  handleSubmitDelete: () => void;
  handleSubmitDeleteMultiple: () => void;
};

type CreateHandlerProps = Pick<PositionsHandlersProps, "setOpenDialog">;

type DeleteHandlerProps = Pick<
  PositionsHandlersProps,
  "setSelectedRow" | "setOpenAlert"
> & { row: Position };

type DeleteMultipleHandlerProps = Pick<
  PositionsHandlersProps,
  "setSelectedRows" | "setOpenAlert"
> & {
  rows: Position[];
};

type EditHandlerProps = Pick<
  PositionsHandlersProps,
  "form" | "setSelectedRow" | "setOpenDialog"
> & {
  row: Position;
};

type OpenChangeAlertDialogHandlerProps = Pick<
  PositionsHandlersProps,
  | "selectedRow"
  | "selectedRows"
  | "setOpenAlert"
  | "setSelectedRow"
  | "setSelectedRows"
> & {
  open: boolean;
};

type OpenChangeDialogHandlerProps = Pick<
  PositionsHandlersProps,
  "form" | "selectedRow" | "setOpenDialog" | "setSelectedRow"
> & {
  open: boolean;
};

type SubmitHandlerCreateProps = Pick<
  SubmitHandlerProps,
  "form" | "setData" | "setLoading" | "setOpenDialog" | "values"
>;

type SubmitHandlerDeleteProps = Pick<
  PositionsHandlersProps,
  "selectedRow" | "setData" | "setLoading"
>;

type SubmitHandlerDeleteMultipleProps = Pick<
  PositionsHandlersProps,
  "selectedRows" | "setData" | "setLoading" | "setSelectedRows"
>;

type SubmitHandlerEditProps = Pick<
  SubmitHandlerProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
  | "values"
>;

type SubmitHandlerProps = Pick<
  PositionsHandlersProps,
  | "form"
  | "selectedRow"
  | "setData"
  | "setLoading"
  | "setOpenDialog"
  | "setSelectedRow"
> & {
  values: PositionSchema;
};

export type {
  PositionsHandlersProps,
  PositionsHandlersReturn,
  CreateHandlerProps,
  DeleteHandlerProps,
  DeleteMultipleHandlerProps,
  EditHandlerProps,
  OpenChangeAlertDialogHandlerProps,
  OpenChangeDialogHandlerProps,
  SubmitHandlerCreateProps,
  SubmitHandlerDeleteMultipleProps,
  SubmitHandlerDeleteProps,
  SubmitHandlerEditProps,
  SubmitHandlerProps,
};
