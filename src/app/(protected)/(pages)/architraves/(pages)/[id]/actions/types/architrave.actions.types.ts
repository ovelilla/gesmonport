// Types
import type { Architrave, ArchitravePrice } from "../../types/architrave.types";

type ReadArchitraveProps = {
  id: string;
};

type ReadArchitraveReturn = Architrave | null;

type SaveArchitravePricesProps = {
  architraveId: string;
  prices: Pick<ArchitravePrice, "height" | "width" | "price">[];
};

type SaveArchitravePricesReturn = {
  prices?: ArchitravePrice[];
  success?: string;
  error?: string;
};

export type {
  ReadArchitraveProps,
  ReadArchitraveReturn,
  SaveArchitravePricesProps,
  SaveArchitravePricesReturn,
};
