// Types
import type { Model } from "../../types/model.types";

type ReadModelProps = {
  id: string;
};

type ReadModelReturn = Model | null;

export type { ReadModelProps, ReadModelReturn };
