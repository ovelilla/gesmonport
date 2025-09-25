import {
  Architrave as PrismaArchitrave,
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveImage,
  ArchitraveType,
  Budget as PrismaBudget,
  Customer as PrismaCustomer,
  DoorFamily as PrismaDoorFamily,
  DoorFamilyPrice,
  DoorFinish as PrismaDoorFinish,
  DoorFinishPrice,
  DoorModel as PrismaDoorModel,
  DoorModelPrice,
  DoorType as PrismaDoorType,
  DoorTypePrice,
  Frame as PrismaFrame,
  FrameFamily,
  FrameFinish,
  FrameImage,
  FrameType,
  // Glass,
  Hardware as PrismaHardware,
  HardwareFinish,
  HardwareImage,
  HardwareType as PrismaHardwareType,
  PaymentMethod as PrismaPaymentMethod,
} from "@prisma/client";

type Architrave = PrismaArchitrave & {
  family: ArchitraveFamily;
  finish: ArchitraveFinish;
  images: ArchitraveImage[];
  type: ArchitraveType;
};

type Budget = PrismaBudget & {
  customer: PrismaCustomer;
};

type Customer = PrismaCustomer & {
  paymentMethod: PrismaPaymentMethod | null;
};

type DoorFamily = PrismaDoorFamily & {
  models: PrismaDoorModel[];
  prices: DoorFamilyPrice[];
};

type DoorFinish = PrismaDoorFinish & {
  prices: DoorFinishPrice[];
};

type DoorModel = PrismaDoorModel & {
  finishes: PrismaDoorFinish[];
  prices: DoorModelPrice[];
};

type DoorType = PrismaDoorType & {
  families: PrismaDoorFamily[];
  prices: DoorTypePrice[];
};

type Frame = PrismaFrame & {
  family: FrameFamily;
  finish: FrameFinish;
  images: FrameImage[];
  type: FrameType;
};

type Hardware = PrismaHardware & {
  doorTypes: PrismaDoorType[];
  finish: HardwareFinish | null;
  images: HardwareImage[];
  type: PrismaHardwareType;
};

type HardwareType = PrismaHardwareType;

type PaymentMethod = PrismaPaymentMethod;

export type {
  Architrave,
  Budget,
  Customer,
  DoorFamily,
  DoorFinish,
  DoorModel,
  DoorType,
  Frame,
  Hardware,
  HardwareType,
  PaymentMethod,
};
