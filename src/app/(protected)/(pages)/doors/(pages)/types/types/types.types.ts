import {
  DoorFamily as PrismaDoorFamily,
  DoorType as PrismaDoorType,
  DoorTypeImage,
} from "@/generated/prisma";

type Family = PrismaDoorFamily;

type Type = PrismaDoorType & {
  families: PrismaDoorFamily[];
  images: DoorTypeImage[];
};

export type { Family, Type };
