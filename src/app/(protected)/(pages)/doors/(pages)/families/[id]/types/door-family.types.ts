import {
  DoorFamily as PrismaDoorFamily,
  DoorFamilyImage,
  DoorModel,
  DoorFamilyPrice as PrismaDoorFamilyPrice,
} from "@prisma/client";

type DoorFamily = PrismaDoorFamily & {
  images: DoorFamilyImage[];
  models: DoorModel[];
  prices: DoorFamilyPrice[];
};

type DoorFamilyPrice = PrismaDoorFamilyPrice;

export type { DoorFamily, DoorFamilyPrice };
