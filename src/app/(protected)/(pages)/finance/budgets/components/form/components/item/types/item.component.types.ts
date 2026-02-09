// Types
import type {
  ArchitraveFamily,
  ArchitraveFinish,
  ArchitraveModel,
  ArchitraveType,
  DoorExtra,
  DoorFamily,
  DoorFinish,
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
} from "@/app/(protected)/(pages)/finance/budgets/types/budgets.types";
import type { BudgetSchema } from "@/app/(protected)/(pages)/finance/budgets/schemas/types/budgets.schemas.types";
import type { UseFieldArrayReturn } from "react-hook-form";

type ItemProps = {
  architraveFamilies: ArchitraveFamily[];
  architraveFinishes: ArchitraveFinish[];
  architraveModels: ArchitraveModel[];
  architraveTypes: ArchitraveType[];
  doorExtras: DoorExtra[];
  doorFamilies: DoorFamily[];
  doorFinishes: DoorFinish[];
  doorModels: DoorModel[];
  doorTypes: DoorType[];
  fieldArray: UseFieldArrayReturn<BudgetSchema, "items">;
  frameFamilies: FrameFamily[];
  frameFinishes: FrameFinish[];
  frameModels: FrameModel[];
  frameTypes: FrameType[];
  glassFamilies: GlassFamily[];
  glassFinishes: GlassFinish[];
  glassModels: GlassModel[];
  glassTypes: GlassType[];
  hardwares: Hardware[];
  hardwareTypes: HardwareType[];
  index: number;
};

export type { ItemProps };
