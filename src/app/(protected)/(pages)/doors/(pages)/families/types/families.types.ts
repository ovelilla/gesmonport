import {
  DoorFamily as PrismaDoorFamily,
  DoorFamilyImage,
} from "@prisma/client";

type Family = PrismaDoorFamily & { images: DoorFamilyImage[] };

export type { Family };
