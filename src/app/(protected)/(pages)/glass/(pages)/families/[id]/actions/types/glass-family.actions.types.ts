// Types
import type {
  GlassFamily,
  GlassFamilyPrice,
} from "../../types/glass-family.types";

type ReadGlassFamilyProps = {
  id: string;
};

type ReadGlassFamilyReturn = GlassFamily | null;

type SaveGlassFamilyPricesProps = {
  glassFamilyId: string;
  prices: Pick<GlassFamilyPrice, "height" | "width" | "price">[];
};

type SaveGlassFamilyPricesReturn = {
  prices?: GlassFamilyPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadGlassFamilyProps,
  ReadGlassFamilyReturn,
  SaveGlassFamilyPricesProps,
  SaveGlassFamilyPricesReturn,
};
