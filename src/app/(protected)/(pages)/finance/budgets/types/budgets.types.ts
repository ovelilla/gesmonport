import {
  ArchitraveFamily as PrismaArchitraveFamily,
  ArchitraveFamilyPrice,
  ArchitraveFinish as PrismaArchitraveFinish,
  ArchitraveFinishPrice,
  ArchitraveModel as PrismaArchitraveModel,
  ArchitraveModelPrice,
  ArchitraveType as PrismaArchitraveType,
  ArchitraveTypePrice,
  Budget as PrismaBudget,
  Customer as PrismaCustomer,
  DoorExtra as PrismaDoorExtra,
  DoorFamily as PrismaDoorFamily,
  DoorFamilyPrice,
  DoorFinish as PrismaDoorFinish,
  DoorFinishPrice,
  DoorModel as PrismaDoorModel,
  DoorModelPrice,
  DoorType as PrismaDoorType,
  DoorTypePrice,
  FrameFamily as PrismaFrameFamily,
  FrameFamilyPrice,
  FrameFinish as PrismaFrameFinish,
  FrameFinishPrice,
  FrameModel as PrismaFrameModel,
  FrameModelPrice,
  FrameType as PrismaFrameType,
  FrameTypePrice,
  GlassFamily as PrismaGlassFamily,
  GlassFamilyPrice,
  GlassFinish as PrismaGlassFinish,
  GlassFinishPrice,
  GlassModel as PrismaGlassModel,
  GlassModelPrice,
  GlassType as PrismaGlassType,
  GlassTypePrice,
  Hardware as PrismaHardware,
  HardwareFinish,
  HardwareImage,
  HardwareType as PrismaHardwareType,
  PaymentMethod as PrismaPaymentMethod,
} from "@/generated/prisma";

type ArchitraveFamily = PrismaArchitraveFamily & {
  models: PrismaArchitraveModel[];
  prices: ArchitraveFamilyPrice[];
};

type ArchitraveFinish = PrismaArchitraveFinish & {
  prices: ArchitraveFinishPrice[];
};

type ArchitraveModel = PrismaArchitraveModel & {
  finishes: PrismaArchitraveFinish[];
  prices: ArchitraveModelPrice[];
};

type ArchitraveType = PrismaArchitraveType & {
  families: PrismaArchitraveFamily[];
  prices: ArchitraveTypePrice[];
};

type Budget = PrismaBudget & {
  customer: PrismaCustomer;
};

type Customer = PrismaCustomer & {
  paymentMethod: PrismaPaymentMethod | null;
};

type DoorExtra = PrismaDoorExtra;

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

type FrameFamily = PrismaFrameFamily & {
  models: PrismaFrameModel[];
  prices: FrameFamilyPrice[];
};

type FrameFinish = PrismaFrameFinish & {
  prices: FrameFinishPrice[];
};

type FrameModel = PrismaFrameModel & {
  finishes: PrismaFrameFinish[];
  prices: FrameModelPrice[];
};

type FrameType = PrismaFrameType & {
  families: PrismaFrameFamily[];
  prices: FrameTypePrice[];
};

type GlassFamily = PrismaGlassFamily & {
  models: PrismaGlassModel[];
  prices: GlassFamilyPrice[];
};

type GlassFinish = PrismaGlassFinish & {
  prices: GlassFinishPrice[];
};

type GlassModel = PrismaGlassModel & {
  finishes: PrismaGlassFinish[];
  prices: GlassModelPrice[];
};

type GlassType = PrismaGlassType & {
  families: PrismaGlassFamily[];
  prices: GlassTypePrice[];
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
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveModel,
  ArchitraveType,
  Budget,
  Customer,
  DoorFamily,
  DoorFinish,
  DoorExtra,
  DoorModel,
  DoorType,
  FrameFamily,
  FrameFinish,
  FrameModel,
  FrameType,
  GlassFamily,
  GlassFinish,
  GlassModel,
  GlassType,
  Hardware,
  HardwareType,
  PaymentMethod,
};
