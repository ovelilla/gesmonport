// Types
import type { Door, DoorPrice } from "../../types/door.types";

type ReadDoorProps = {
  id: string;
};

type ReadDoorReturn = Door | null;

type SaveDoorPricesProps = {
  doorId: string;
  prices: Pick<DoorPrice, "height" | "width" | "price">[];
};

type SaveDoorPricesReturn = {
  prices?: DoorPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadDoorProps,
  ReadDoorReturn,
  SaveDoorPricesProps,
  SaveDoorPricesReturn,
};
