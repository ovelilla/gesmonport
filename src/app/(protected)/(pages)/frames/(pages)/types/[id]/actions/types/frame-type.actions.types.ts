// Types
import type { FrameType, FrameTypePrice } from "../../types/frame-type.types";

type ReadFrameTypeProps = {
  id: string;
};

type ReadFrameTypeReturn = FrameType | null;

type SaveFrameTypePricesProps = {
  frameTypeId: string;
  prices: Pick<FrameTypePrice, "height" | "width" | "price">[];
};

type SaveFrameTypePricesReturn = {
  prices?: FrameTypePrice[];
  success?: string;
  error?: string;
};

export type {
  ReadFrameTypeProps,
  ReadFrameTypeReturn,
  SaveFrameTypePricesProps,
  SaveFrameTypePricesReturn,
};
