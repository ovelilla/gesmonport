// Types
import type { Family, Model } from "../../types/families.types";
import type { FamilySchema } from "../../schemas/types/family.schema.types";

type CreateFamilyProps = {
  newImages: File[];
  values: FamilySchema;
};

type CreateFamilyReturn = {
  family?: Family;
  error?: string;
  success?: string;
};

type DeleteFamilyProps = {
  id: string;
};

type DeleteFamilyReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleFamiliesProps = {
  ids: string[];
};

type DeleteMultipleFamiliesReturn = {
  success?: string;
  error?: string;
};

type ReadFamiliesReturn = Family[];

type ReadModelsReturn = Model[];

type UpdateFamilyProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: FamilySchema;
};

type UpdateFamilyReturn = {
  family?: Family;
  error?: string;
  success?: string;
};

export type {
  CreateFamilyProps,
  CreateFamilyReturn,
  DeleteFamilyProps,
  DeleteFamilyReturn,
  DeleteMultipleFamiliesProps,
  DeleteMultipleFamiliesReturn,
  ReadFamiliesReturn,
  ReadModelsReturn,
  UpdateFamilyProps,
  UpdateFamilyReturn,
};
