// Types
import type {
  FrameFinish,
  FrameFinishPrice,
} from "../../types/frame-finish.types";

type ReadFrameFinishProps = {
  id: string;
};

type ReadFrameFinishReturn = FrameFinish | null;

type SaveFrameFinishPricesProps = {
  frameFinishId: string;
  prices: Pick<FrameFinishPrice, "height" | "width" | "price">[];
};

type SaveFrameFinishPricesReturn = {
  prices?: FrameFinishPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadFrameFinishProps,
  ReadFrameFinishReturn,
  SaveFrameFinishPricesProps,
  SaveFrameFinishPricesReturn,
};
