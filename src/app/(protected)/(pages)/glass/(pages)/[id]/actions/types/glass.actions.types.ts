// Types
import type { Glass, GlassPrice } from "../../types/glass.types";

type ReadGlassProps = {
  id: string;
};

type ReadGlassReturn = Glass | null;

type SaveGlassPricesProps = {
  glassId: string;
  prices: Pick<GlassPrice, "height" | "width" | "price">[];
};

type SaveGlassPricesReturn = {
  prices?: GlassPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadGlassProps,
  ReadGlassReturn,
  SaveGlassPricesProps,
  SaveGlassPricesReturn,
};
