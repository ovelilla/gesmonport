import {
  Architrave as PrismaArchitrave,
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveImage,
  ArchitraveType,
  Budget as PrismaBudget,
  Customer as PrismaCustomer,
  Door as PrismaDoor,
  DoorFamily,
  DoorFinish,
  DoorImage,
  DoorPrice,
  DoorType,
  Frame as PrismaFrame,
  FrameFamily,
  FrameFinish,
  FrameImage,
  FrameType,
  Glass,
  Hardware as PrismaHardware,
  HardwareFinish,
  HardwareImage,
  HardwareType,
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

type Door = PrismaDoor & {
  family: DoorFamily;
  finish: DoorFinish;
  glass: Glass[];
  images: DoorImage[];
  prices: DoorPrice[];
  type: DoorType;
};

type Frame = PrismaFrame & {
  family: FrameFamily;
  finish: FrameFinish;
  images: FrameImage[];
  type: FrameType;
};

type Hardware = PrismaHardware & {
  doorTypes: DoorType[];
  finish: HardwareFinish | null;
  images: HardwareImage[];
  type: HardwareType;
};

type PaymentMethod = PrismaPaymentMethod;

export type {
  Architrave,
  Budget,
  Customer,
  Door,
  Frame,
  Hardware,
  PaymentMethod,
};
