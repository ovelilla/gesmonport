import {
  DoorFamily as PrismaDoorFamily,
  DoorFamilyImage,
  DoorModel as PrismaDoorModel,
} from "@prisma/client";

type Family = PrismaDoorFamily & {
  images: DoorFamilyImage[];
  models: PrismaDoorModel[];
};

type Model = PrismaDoorModel;

export type { Family, Model };
