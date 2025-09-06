import { DoorModel as PrismaDoorModel, DoorModelImage } from "@prisma/client";

type Model = PrismaDoorModel & { images: DoorModelImage[] };

export type { Model };
