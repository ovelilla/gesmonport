import { DoorType as PrismaDoorType, DoorTypeImage } from "@prisma/client";

type Type = PrismaDoorType & { images: DoorTypeImage[] };

export type { Type };
