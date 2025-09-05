// Actions
import {
  readFamilies,
  readFinishes,
  readDoors,
  readGlass,
  readTypes,
} from "./actions/doors.actions";
// Containers
import { DoorsContainer } from "./doors.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puertas",
  description: "Página de puertas",
};

const DoorsPage = async () => {
  const [families, finishes, doors, glass, types] = await Promise.all([
    readFamilies(),
    readFinishes(),
    readDoors(),
    readGlass(),
    readTypes(),
  ]);

  return (
    <DoorsContainer
      families={families}
      finishes={finishes}
      doors={doors}
      glass={glass}
      types={types}
    />
  );
};

export default DoorsPage;
