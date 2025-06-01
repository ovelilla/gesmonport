// Types
import type { Type } from "../../types/types.types";
import type { TypeSchema } from "../../schemas/types/type.schema.types";

type CreateTypeProps = {
  newImages: File[];
  values: TypeSchema;
};

type CreateTypeReturn = {
  type?: Type;
  error?: string;
  success?: string;
};

type DeleteTypeProps = {
  id: string;
};

type DeleteTypeReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleTypesProps = {
  ids: string[];
};

type DeleteMultipleTypesReturn = {
  success?: string;
  error?: string;
};

type ReadTypesReturn = Type[];

type UpdateTypeProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: TypeSchema;
};

type UpdateTypeReturn = {
  type?: Type;
  error?: string;
  success?: string;
};

export type {
  CreateTypeProps,
  CreateTypeReturn,
  DeleteTypeProps,
  DeleteTypeReturn,
  DeleteMultipleTypesProps,
  DeleteMultipleTypesReturn,
  ReadTypesReturn,
  UpdateTypeProps,
  UpdateTypeReturn,
};
