import {
  DoorFamily as PrismaDoorFamily,
  DoorFamilyImage,
  DoorModel,
  DoorFamilyPrice as PrismaDoorFamilyPrice,
} from "@/generated/prisma";

type DoorFamily = PrismaDoorFamily & {
  images: DoorFamilyImage[];
  models: DoorModel[];
  prices: DoorFamilyPrice[];
};

type DoorFamilyPrice = PrismaDoorFamilyPrice;

export type { DoorFamily, DoorFamilyPrice };
