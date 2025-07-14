// Types
import type { Family, Finish, Glass, Model, Type } from "./glass.types";

type GlassProps = {
  families: Family[];
  finishes: Finish[];
  glass: Glass[];
  models: Model[];
  types: Type[];
};

export type { GlassProps };
