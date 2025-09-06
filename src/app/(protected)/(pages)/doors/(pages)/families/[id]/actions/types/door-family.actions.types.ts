// Types
import type {
  DoorFamily,
  DoorFamilyPrice,
} from "../../types/door-family.types";

type ReadDoorFamilyProps = {
  id: string;
};

type ReadDoorFamilyReturn = DoorFamily | null;

type SaveDoorFamilyPricesProps = {
  doorFamilyId: string;
  prices: Pick<DoorFamilyPrice, "height" | "width" | "price">[];
};

type SaveDoorFamilyPricesReturn = {
  prices?: DoorFamilyPrice[];
  success?: string;
  error?: string;
};

export type {
  ReadDoorFamilyProps,
  ReadDoorFamilyReturn,
  SaveDoorFamilyPricesProps,
  SaveDoorFamilyPricesReturn,
};
