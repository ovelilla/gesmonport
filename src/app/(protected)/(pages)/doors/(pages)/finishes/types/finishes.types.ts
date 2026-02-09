import {
  DoorFinish as PrismaDoorFinish,
  DoorFinishImage,
} from "@/generated/prisma";

type Finish = PrismaDoorFinish & { images: DoorFinishImage[] };

export type { Finish };
