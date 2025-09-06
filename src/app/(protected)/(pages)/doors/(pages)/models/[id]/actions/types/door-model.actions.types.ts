// Types
import type { DoorModel, DoorModelPrice } from "../../types/door-model.types";

type ReadDoorModelProps = {
  id: string;
};

type ReadDoorModelReturn = DoorModel | null;

type SaveDoorModelPricesProps = {
  doorModelId: string;
  prices: Pick<DoorModelPrice, "height" | "width" | "price">[];
};

type SaveDoorModelPricesReturn = {
  prices?: DoorModelPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadDoorModelProps,
  ReadDoorModelReturn,
  SaveDoorModelPricesProps,
  SaveDoorModelPricesReturn,
};
