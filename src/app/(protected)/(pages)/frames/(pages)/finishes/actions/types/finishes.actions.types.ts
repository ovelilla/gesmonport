// Types
import type { Finish } from "../../types/finishes.types";
import type { FinishSchema } from "../../schemas/types/finish.schema.types";

type CreateFinishProps = {
  newImages: File[];
  values: FinishSchema;
};

type CreateFinishReturn = {
  finish?: Finish;
  error?: string;
  success?: string;
};

type DeleteFinishProps = {
  id: string;
};

type DeleteFinishReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleFinishesProps = {
  ids: string[];
};

type DeleteMultipleFinishesReturn = {
  success?: string;
  error?: string;
};

type ReadFinishesReturn = Finish[];

type UpdateFinishProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: FinishSchema;
};

type UpdateFinishReturn = {
  finish?: Finish;
  error?: string;
  success?: string;
};

export type {
  CreateFinishProps,
  CreateFinishReturn,
  DeleteFinishProps,
  DeleteFinishReturn,
  DeleteMultipleFinishesProps,
  DeleteMultipleFinishesReturn,
  ReadFinishesReturn,
  UpdateFinishProps,
  UpdateFinishReturn,
};
