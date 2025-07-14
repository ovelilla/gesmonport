// Types
import type { Family, Finish, Glass, Model, Type } from "../../types/glass.types";
import type { GlassSchema } from "../../schemas/types/glass.schema.types";

type CreateGlassProps = {
  newImages: File[];
  values: GlassSchema;
};

type CreateGlassReturn = {
  glass?: Glass;
  error?: string;
  success?: string;
};

type DeleteGlassProps = {
  id: string;
};

type DeleteGlassReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleGlassProps = {
  ids: string[];
};

type DeleteMultipleGlassReturn = {
  success?: string;
  error?: string;
};

type ReadFamiliesReturn = Family[];

type ReadFinishesReturn = Finish[];

type ReadGlassReturn = Glass[];

type ReadModelsReturn = Model[];

type ReadTypesReturn = Type[];

type UpdateGlassProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: GlassSchema;
};

type UpdateGlassReturn = {
  glass?: Glass;
  error?: string;
  success?: string;
};

export type {
  CreateGlassProps,
  CreateGlassReturn,
  DeleteGlassProps,
  DeleteGlassReturn,
  DeleteMultipleGlassProps,
  DeleteMultipleGlassReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadGlassReturn,
  ReadModelsReturn,
  ReadTypesReturn,
  UpdateGlassProps,
  UpdateGlassReturn,
};
