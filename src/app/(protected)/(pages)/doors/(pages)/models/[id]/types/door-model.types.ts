import {
  DoorFinish,
  DoorModel as PrismaDoorModel,
  DoorModelImage,
  DoorModelPrice as PrismaDoorModelPrice,
} from "@/generated/prisma/client";

type DoorModel = PrismaDoorModel & {
  finishes: DoorFinish[];
  images: DoorModelImage[];
  prices: DoorModelPrice[];
};

type DoorModelPrice = PrismaDoorModelPrice;

export type { DoorModel, DoorModelPrice };
