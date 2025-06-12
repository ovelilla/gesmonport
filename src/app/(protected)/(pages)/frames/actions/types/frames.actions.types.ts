// Types
import type { Family, Finish, Frame, Type } from "../../types/frames.types";
import type { FrameSchema } from "../../schemas/types/frame.schema.types";

type CreateFrameProps = {
  newImages: File[];
  values: FrameSchema;
};

type CreateFrameReturn = {
  frame?: Frame;
  error?: string;
  success?: string;
};

type DeleteFrameProps = {
  id: string;
};

type DeleteFrameReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleFramesProps = {
  ids: string[];
};

type DeleteMultipleFramesReturn = {
  success?: string;
  error?: string;
};

type ReadFamiliesReturn = Family[];

type ReadFinishesReturn = Finish[];

type ReadFramesReturn = Frame[];

type ReadTypesReturn = Type[];

type UpdateFrameProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: FrameSchema;
};

type UpdateFrameReturn = {
  frame?: Frame;
  error?: string;
  success?: string;
};

export type {
  CreateFrameProps,
  CreateFrameReturn,
  DeleteFrameProps,
  DeleteFrameReturn,
  DeleteMultipleFramesProps,
  DeleteMultipleFramesReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadFramesReturn,
  ReadTypesReturn,
  UpdateFrameProps,
  UpdateFrameReturn,
};
