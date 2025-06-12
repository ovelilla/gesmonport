// Types
import type { Frame, FramePrice } from "../../types/frame.types";

type ReadFrameProps = {
  id: string;
};

type ReadFrameReturn = Frame | null;

type SaveFramePricesProps = {
  frameId: string;
  prices: Pick<FramePrice, "height" | "width" | "price">[];
};

type SaveFramePricesReturn = {
  prices?: FramePrice[];
  success?: string;
  error?: string;
};

export type {
  ReadFrameProps,
  ReadFrameReturn,
  SaveFramePricesProps,
  SaveFramePricesReturn,
};
