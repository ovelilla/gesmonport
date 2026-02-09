// Types
import type {
  ArchitraveFamily,
  ArchitraveFamilyPrice,
} from "../../types/architrave-family.types";

type ReadArchitraveFamilyProps = {
  id: string;
};

type ReadArchitraveFamilyReturn = ArchitraveFamily | null;

type SaveArchitraveFamilyPricesProps = {
  architraveFamilyId: string;
  prices: Pick<ArchitraveFamilyPrice, "height" | "width" | "price">[];
};

type SaveArchitraveFamilyPricesReturn = {
  prices?: ArchitraveFamilyPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadArchitraveFamilyProps,
  ReadArchitraveFamilyReturn,
  SaveArchitraveFamilyPricesProps,
  SaveArchitraveFamilyPricesReturn,
};
