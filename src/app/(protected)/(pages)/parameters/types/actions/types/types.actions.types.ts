// Types
import type { Type } from "../../types/types.types";
import type { TypeSchema } from "../../schemas/types/types.schema.types";

type CreateTypeProps = {
  values: TypeSchema;
};

type CreateTypeReturn = {
  client?: Type;
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
  values: TypeSchema;
};

type UpdateTypeReturn = {
  client?: Type;
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
