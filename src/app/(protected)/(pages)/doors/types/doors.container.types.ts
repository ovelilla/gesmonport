// Types
import type { Family, Finish, Door, Glass, Type } from "./doors.types";

type DoorsProps = {
  families: Family[];
  finishes: Finish[];
  doors: Door[];
  glass: Glass[];
  types: Type[];
};

export type { DoorsProps };
