// Types
import type {
  ArchitraveFinish,
  ArchitraveFinishPrice,
} from "../../types/architrave-finish.types";

type ReadArchitraveFinishProps = {
  id: string;
};

type ReadArchitraveFinishReturn = ArchitraveFinish | null;

type SaveArchitraveFinishPricesProps = {
  architraveFinishId: string;
  prices: Pick<ArchitraveFinishPrice, "height" | "width" | "price">[];
};

type SaveArchitraveFinishPricesReturn = {
  prices?: ArchitraveFinishPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadArchitraveFinishProps,
  ReadArchitraveFinishReturn,
  SaveArchitraveFinishPricesProps,
  SaveArchitraveFinishPricesReturn,
};
