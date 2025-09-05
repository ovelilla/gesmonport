import {
  Door as PrismaDoor,
  DoorFamily as PrismaDoorFamily,
  DoorFinish as PrismaDoorFinish,
  DoorImage,
  DoorType as PrismaDoorType,
  Glass as PrismaGlass,
} from "@prisma/client";

type Family = PrismaDoorFamily;

type Finish = PrismaDoorFinish;

type Glass = PrismaGlass;

type Door = PrismaDoor & {
  family: PrismaDoorFamily;
  finish: PrismaDoorFinish;
  images: DoorImage[];
  type: PrismaDoorType;
};

type Type = PrismaDoorType;

export type { Family, Finish, Glass, Door, Type };
