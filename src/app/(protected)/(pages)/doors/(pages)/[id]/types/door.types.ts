import {
  Door as PrismaDoor,
  DoorFamily,
  DoorFinish,
  DoorImage,
  DoorPrice as PrismaDoorPrice,
  DoorType,
} from "@prisma/client";

type Door = PrismaDoor & {
  family: DoorFamily;
  finish: DoorFinish;
  images: DoorImage[];
  prices: DoorPrice[];
  type: DoorType;
};

type DoorPrice = PrismaDoorPrice;

export type { Door, DoorPrice };
