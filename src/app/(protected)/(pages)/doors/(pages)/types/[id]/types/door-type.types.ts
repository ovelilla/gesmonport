import {
  DoorType as PrismaDoorType,
  DoorTypeImage,
  DoorTypePrice as PrismaDoorTypePrice,
} from "@prisma/client";

type DoorType = PrismaDoorType & {
  images: DoorTypeImage[];
  prices: DoorTypePrice[];
};

type DoorTypePrice = PrismaDoorTypePrice;

export type { DoorType, DoorTypePrice };
