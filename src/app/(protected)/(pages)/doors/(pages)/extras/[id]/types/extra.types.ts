// Types
import type {
  DoorExtra as PrismaDoorExtra,
  DoorExtraImage,
} from "@prisma/client";

type Extra = PrismaDoorExtra & {
  images: DoorExtraImage[];
};

export type { Extra };
