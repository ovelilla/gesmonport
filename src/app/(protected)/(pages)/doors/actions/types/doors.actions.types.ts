// Types
import type { Family, Finish, Glass, Door, Type } from "../../types/doors.types";
import type { DoorSchema } from "../../schemas/types/door.schema.types";

type CreateDoorProps = {
  newImages: File[];
  values: DoorSchema;
};

type CreateDoorReturn = {
  door?: Door;
  error?: string;
  success?: string;
};

type DeleteDoorProps = {
  id: string;
};

type DeleteDoorReturn = {
  success?: string;
  error?: string;
};

type DeleteMultipleDoorsProps = {
  ids: string[];
};

type DeleteMultipleDoorsReturn = {
  success?: string;
  error?: string;
};

type ReadFamiliesReturn = Family[];

type ReadFinishesReturn = Finish[];

type ReadGlassReturn = Glass[];

type ReadDoorsReturn = Door[];

type ReadTypesReturn = Type[];

type UpdateDoorProps = {
  id: string;
  newImages: File[];
  toDelete: string[];
  values: DoorSchema;
};

type UpdateDoorReturn = {
  door?: Door;
  error?: string;
  success?: string;
};

export type {
  CreateDoorProps,
  CreateDoorReturn,
  DeleteDoorProps,
  DeleteDoorReturn,
  DeleteMultipleDoorsProps,
  DeleteMultipleDoorsReturn,
  ReadFamiliesReturn,
  ReadFinishesReturn,
  ReadGlassReturn,
  ReadDoorsReturn,
  ReadTypesReturn,
  UpdateDoorProps,
  UpdateDoorReturn,
};
