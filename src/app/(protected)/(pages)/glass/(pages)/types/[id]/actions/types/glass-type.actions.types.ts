// Types
import type { GlassType, GlassTypePrice } from "../../types/glass-type.types";

type ReadGlassTypeProps = {
  id: string;
};

type ReadGlassTypeReturn = GlassType | null;

type SaveGlassTypePricesProps = {
  glassTypeId: string;
  prices: Pick<GlassTypePrice, "height" | "width" | "price">[];
};

type SaveGlassTypePricesReturn = {
  prices?: GlassTypePrice[];
  success?: string;
  error?: string;
};

export type {
  ReadGlassTypeProps,
  ReadGlassTypeReturn,
  SaveGlassTypePricesProps,
  SaveGlassTypePricesReturn,
};
