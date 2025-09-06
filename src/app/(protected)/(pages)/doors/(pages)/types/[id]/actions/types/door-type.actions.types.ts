// Types
import type { DoorType, DoorTypePrice } from "../../types/door-type.types";

type ReadDoorTypeProps = {
  id: string;
};

type ReadDoorTypeReturn = DoorType | null;

type SaveDoorTypePricesProps = {
  doorTypeId: string;
  prices: Pick<DoorTypePrice, "height" | "width" | "price">[];
};

type SaveDoorTypePricesReturn = {
  prices?: DoorTypePrice[];
  success?: string;
  error?: string;
};

export type {
  ReadDoorTypeProps,
  ReadDoorTypeReturn,
  SaveDoorTypePricesProps,
  SaveDoorTypePricesReturn,
};
