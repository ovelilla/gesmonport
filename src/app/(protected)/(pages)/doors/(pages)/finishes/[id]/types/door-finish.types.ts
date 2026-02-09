import {
  DoorFinish as PrismaDoorFinish,
  DoorFinishImage,
  DoorFinishPrice as PrismaDoorFinishPrice,
} from "@/generated/prisma";

type DoorFinish = PrismaDoorFinish & {
  images: DoorFinishImage[];
  prices: DoorFinishPrice[];
};

type DoorFinishPrice = PrismaDoorFinishPrice;

export type { DoorFinish, DoorFinishPrice };
