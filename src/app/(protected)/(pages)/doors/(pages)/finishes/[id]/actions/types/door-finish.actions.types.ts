// Types
import type {
  DoorFinish,
  DoorFinishPrice,
} from "../../types/door-finish.types";

type ReadDoorFinishProps = {
  id: string;
};

type ReadDoorFinishReturn = DoorFinish | null;

type SaveDoorFinishPricesProps = {
  doorFinishId: string;
  prices: Pick<DoorFinishPrice, "height" | "width" | "price">[];
};

type SaveDoorFinishPricesReturn = {
  prices?: DoorFinishPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadDoorFinishProps,
  ReadDoorFinishReturn,
  SaveDoorFinishPricesProps,
  SaveDoorFinishPricesReturn,
};
