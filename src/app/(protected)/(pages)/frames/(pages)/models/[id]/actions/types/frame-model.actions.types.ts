// Types
import type {
  FrameModel,
  FrameModelPrice,
} from "../../types/frame-model.types";

type ReadFrameModelProps = {
  id: string;
};

type ReadFrameModelReturn = FrameModel | null;

type SaveFrameModelPricesProps = {
  frameModelId: string;
  prices: Pick<FrameModelPrice, "height" | "width" | "price">[];
};

type SaveFrameModelPricesReturn = {
  prices?: FrameModelPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadFrameModelProps,
  ReadFrameModelReturn,
  SaveFrameModelPricesProps,
  SaveFrameModelPricesReturn,
};
