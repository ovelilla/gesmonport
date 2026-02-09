// Types
import type {
  ArchitraveModel,
  ArchitraveModelPrice,
} from "../../types/architrave-model.types";

type ReadArchitraveModelProps = {
  id: string;
};

type ReadArchitraveModelReturn = ArchitraveModel | null;

type SaveArchitraveModelPricesProps = {
  architraveModelId: string;
  prices: Pick<ArchitraveModelPrice, "height" | "width" | "price">[];
};

type SaveArchitraveModelPricesReturn = {
  prices?: ArchitraveModelPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadArchitraveModelProps,
  ReadArchitraveModelReturn,
  SaveArchitraveModelPricesProps,
  SaveArchitraveModelPricesReturn,
};
