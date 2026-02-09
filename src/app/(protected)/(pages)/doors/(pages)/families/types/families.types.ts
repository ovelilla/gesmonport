import {
  DoorFamily as PrismaDoorFamily,
  DoorFamilyImage,
  DoorModel as PrismaDoorModel,
} from "@/generated/prisma";

type Family = PrismaDoorFamily & {
  images: DoorFamilyImage[];
  models: PrismaDoorModel[];
};

type Model = PrismaDoorModel;

export type { Family, Model };
