// Types
import type {
  GlassFinish,
  GlassFinishPrice,
} from "../../types/glass-finish.types";

type ReadGlassFinishProps = {
  id: string;
};

type ReadGlassFinishReturn = GlassFinish | null;

type SaveGlassFinishPricesProps = {
  glassFinishId: string;
  prices: Pick<GlassFinishPrice, "height" | "width" | "price">[];
};

type SaveGlassFinishPricesReturn = {
  prices?: GlassFinishPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadGlassFinishProps,
  ReadGlassFinishReturn,
  SaveGlassFinishPricesProps,
  SaveGlassFinishPricesReturn,
};
