// Actions
import {
  readFamilies,
  readFinishes,
  readArchitraves,
  readTypes,
} from "./actions/architraves.actions";
// Containers
import { ArchitravesContainer } from "./architraves.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tapajuntas",
  description: "Página de tapajuntas",
};

const ArchitravesPage = async () => {
  const [families, finishes, architraves, types] = await Promise.all([
    readFamilies(),
    readFinishes(),
    readArchitraves(),
    readTypes(),
  ]);

  return (
    <ArchitravesContainer
      families={families}
      finishes={finishes}
      architraves={architraves}
      types={types}
    />
  );
};

export default ArchitravesPage;
