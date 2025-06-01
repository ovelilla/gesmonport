// Types
import type {
  DoorFinish as PrismaDoorFinish,
  DoorFinishImage,
} from "@prisma/client";

type Finish = PrismaDoorFinish & { images: DoorFinishImage[] };

export type { Finish };
