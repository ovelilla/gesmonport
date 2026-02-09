// Types
import type {
  DoorExtra as PrismaDoorExtra,
  DoorExtraImage,
} from "@/generated/prisma";

type Extra = PrismaDoorExtra & {
  images: DoorExtraImage[];
};

export type { Extra };
