// Types
import type { Family } from "../../types/family.types";

type ReadFamilyProps = {
  id: string;
};

type ReadFamilyReturn = Family | null;

export type { ReadFamilyProps, ReadFamilyReturn };
