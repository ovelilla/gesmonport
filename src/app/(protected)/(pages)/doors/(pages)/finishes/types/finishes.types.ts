import {
  DoorFinish as PrismaDoorFinish,
  DoorFinishImage,
} from "@/generated/prisma/client";

type Finish = PrismaDoorFinish & { images: DoorFinishImage[] };

export type { Finish };
