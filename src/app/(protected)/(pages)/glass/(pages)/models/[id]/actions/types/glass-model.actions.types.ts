// Types
import type {
  GlassModel,
  GlassModelPrice,
} from "../../types/glass-model.types";

type ReadGlassModelProps = {
  id: string;
};

type ReadGlassModelReturn = GlassModel | null;

type SaveGlassModelPricesProps = {
  glassModelId: string;
  prices: Pick<GlassModelPrice, "height" | "width" | "price">[];
};

type SaveGlassModelPricesReturn = {
  prices?: GlassModelPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadGlassModelProps,
  ReadGlassModelReturn,
  SaveGlassModelPricesProps,
  SaveGlassModelPricesReturn,
};
