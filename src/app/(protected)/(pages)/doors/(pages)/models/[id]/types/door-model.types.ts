import {
  DoorFinish,
  DoorModel as PrismaDoorModel,
  DoorModelImage,
  DoorModelPrice as PrismaDoorModelPrice,
} from "@/generated/prisma";

type DoorModel = PrismaDoorModel & {
  finishes: DoorFinish[];
  images: DoorModelImage[];
  prices: DoorModelPrice[];
};

type DoorModelPrice = PrismaDoorModelPrice;

export type { DoorModel, DoorModelPrice };
