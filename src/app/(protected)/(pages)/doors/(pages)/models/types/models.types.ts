import type {
  DoorFinish as PrismaDoorFinish,
  DoorModel as PrismaDoorModel,
  DoorModelImage,
} from "@/generated/prisma/client";

type Finish = PrismaDoorFinish;

type Model = PrismaDoorModel & {
  finishes: PrismaDoorFinish[];
  images: DoorModelImage[];
};

export type { Model, Finish };
