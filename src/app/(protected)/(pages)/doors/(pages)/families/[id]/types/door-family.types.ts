import {
  DoorFamily as PrismaDoorFamily,
  DoorFamilyImage,
  DoorFamilyPrice as PrismaDoorFamilyPrice,
} from "@prisma/client";

type DoorFamily = PrismaDoorFamily & {
  images: DoorFamilyImage[];
  prices: DoorFamilyPrice[];
};

type DoorFamilyPrice = PrismaDoorFamilyPrice;

export type { DoorFamily, DoorFamilyPrice };
