// Actions
import {
  readFamilies,
  readFinishes,
  readGlass,
  readModels,
  readTypes,
} from "./actions/glass.actions";
// Containers
import { GlassContainer } from "./glass.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidrios",
  description: "Página de vidrios",
};

const GlassPage = async () => {
  const [families, finishes, glass, models, types] = await Promise.all([
    readFamilies(),
    readFinishes(),
    readGlass(),
    readModels(),
    readTypes(),
  ]);

  return (
    <GlassContainer
      families={families}
      finishes={finishes}
      glass={glass}
      models={models}
      types={types}
    />
  );
};

export default GlassPage;
