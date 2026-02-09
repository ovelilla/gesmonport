// Actions
import { readFinishes, readModels } from "./actions/models.actions";
// Containers
import { ModelsContainer } from "./models.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelos de vidrios",
  description: "Página de modelos de vidrios",
};

const ModelsPage = async () => {
  const [finishes, models] = await Promise.all([readFinishes(), readModels()]);
  return <ModelsContainer finishes={finishes} models={models} />;
};

export default ModelsPage;
