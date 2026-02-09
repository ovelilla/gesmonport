import type {
  DoorExtra as PrismaDoorExtra,
  DoorExtraImage,
} from "@/generated/prisma/client";

type Extra = PrismaDoorExtra & {
  images: DoorExtraImage[];
};

export type { Extra };
