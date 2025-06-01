// Types
import type { Position } from "../../types/positions.types";
import type { PositionSchema } from "../../schemas/types/position.schema.types";

type CreatePositionProps = {
  values: PositionSchema;
};

type CreatePositionReturn = {
  client?: Position;
  error?: string;
  success?: string;
};

type DeletePositionProps = {
  id: string;
};

type DeletePositionReturn = {
  success?: string;
  error?: string;
};

type DeleteMultiplePositionsProps = {
  ids: string[];
};

type DeleteMultiplePositionsReturn = {
  success?: string;
  error?: string;
};

type ReadPositionsReturn = Position[];

type UpdatePositionProps = {
  id: string;
  values: PositionSchema;
};

type UpdatePositionReturn = {
  client?: Position;
  error?: string;
  success?: string;
};

export type {
  CreatePositionProps,
  CreatePositionReturn,
  DeletePositionProps,
  DeletePositionReturn,
  DeleteMultiplePositionsProps,
  DeleteMultiplePositionsReturn,
  ReadPositionsReturn,
  UpdatePositionProps,
  UpdatePositionReturn,
};
