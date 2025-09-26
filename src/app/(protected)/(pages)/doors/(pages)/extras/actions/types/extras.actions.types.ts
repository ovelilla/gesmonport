// Types
import type { Extra } from "../../types/extras.types";
import type { ExtraSchema } from "../../schemas/types/extras.schema.types";

type CreateExtraProps = {
  newImages: File[];
  values: ExtraSchema;
};

type CreateExtraReturn = {
  extra?: Extra;
  error?: string;
  success?: string;
};

type DeleteExtraProps = {
  id: string;
};

type DeleteExtraReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleExtrasProps = {
  ids: string[];
};

type DeleteMultipleExtrasReturn = {
  success?: string;
  error?: string;
};

type ReadExtrasReturn = Extra[];

type UpdateExtraProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: ExtraSchema;
};

type UpdateExtraReturn = {
  extra?: Extra;
  error?: string;
  success?: string;
};

export type {
  CreateExtraProps,
  CreateExtraReturn,
  DeleteExtraProps,
  DeleteExtraReturn,
  DeleteMultipleExtrasProps,
  DeleteMultipleExtrasReturn,
  ReadExtrasReturn,
  UpdateExtraProps,
  UpdateExtraReturn,
};
