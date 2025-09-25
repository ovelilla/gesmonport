// Types
import type { Finish, Model } from "../../types/models.types";
import type { ModelSchema } from "../../schemas/types/models.schema.types";

type CreateModelProps = {
  newImages: File[];
  values: ModelSchema;
};

type CreateModelReturn = {
  model?: Model;
  error?: string;
  success?: string;
};

type DeleteModelProps = {
  id: string;
};

type DeleteModelReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleModelsProps = {
  ids: string[];
};

type DeleteMultipleModelsReturn = {
  success?: string;
  error?: string;
};

type ReadFinishesReturn = Finish[];

type ReadModelsReturn = Model[];

type UpdateModelProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: ModelSchema;
};

type UpdateModelReturn = {
  model?: Model;
  error?: string;
  success?: string;
};

export type {
  CreateModelProps,
  CreateModelReturn,
  DeleteModelProps,
  DeleteModelReturn,
  DeleteMultipleModelsProps,
  DeleteMultipleModelsReturn,
  ReadFinishesReturn,
  ReadModelsReturn,
  UpdateModelProps,
  UpdateModelReturn,
};
