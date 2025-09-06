import {
  DoorFinish as PrismaDoorFinish,
  DoorFinishImage,
  DoorFinishPrice as PrismaDoorFinishPrice,
} from "@prisma/client";

type DoorFinish = PrismaDoorFinish & {
  images: DoorFinishImage[];
  prices: DoorFinishPrice[];
};

type DoorFinishPrice = PrismaDoorFinishPrice;

export type { DoorFinish, DoorFinishPrice };
