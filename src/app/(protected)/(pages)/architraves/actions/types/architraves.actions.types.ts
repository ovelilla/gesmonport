// Types
import type {
  Family,
  Finish,
  Architrave,
  Type,
} from "../../types/architraves.types";
import type { ArchitraveSchema } from "../../schemas/types/architrave.schema.types";

type CreateArchitraveProps = {
  newImages: File[];
  values: ArchitraveSchema;
};

type CreateArchitraveReturn = {
  architrave?: Architrave;
  error?: string;
  success?: string;
};

type DeleteArchitraveProps = {
  id: string;
};

type DeleteArchitraveReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleArchitravesProps = {
  ids: string[];
};

type DeleteMultipleArchitravesReturn = {
  success?: string;
  error?: string;
};

type ReadFamiliesReturn = Family[];

type ReadFinishesReturn = Finish[];

type ReadArchitravesReturn = Architrave[];

type ReadTypesReturn = Type[];

type UpdateArchitraveProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: ArchitraveSchema;
};

type UpdateArchitraveReturn = {
  architrave?: Architrave;
  error?: string;
  success?: string;
};

export type {
  CreateArchitraveProps,
  CreateArchitraveReturn,
  DeleteArchitraveProps,
  DeleteArchitraveReturn,
  DeleteMultipleArchitravesProps,
  DeleteMultipleArchitravesReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadArchitravesReturn,
  ReadTypesReturn,
  UpdateArchitraveProps,
  UpdateArchitraveReturn,
};
