// Types
import type {
  FrameFamily,
  FrameFamilyPrice,
} from "../../types/frame-family.types";

type ReadFrameFamilyProps = {
  id: string;
};

type ReadFrameFamilyReturn = FrameFamily | null;

type SaveFrameFamilyPricesProps = {
  frameFamilyId: string;
  prices: Pick<FrameFamilyPrice, "height" | "width" | "price">[];
};

type SaveFrameFamilyPricesReturn = {
  prices?: FrameFamilyPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadFrameFamilyProps,
  ReadFrameFamilyReturn,
  SaveFrameFamilyPricesProps,
  SaveFrameFamilyPricesReturn,
};
