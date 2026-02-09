// Actions
import { readFinishes, readModels } from "./actions/models.actions";
// Containers
import { ModelsContainer } from "./models.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelos de puertas",
  description: "Página de modelos de puertas",
};

const ModelsPage = async () => {
  const [finishes, models] = await Promise.all([readFinishes(), readModels()]);
  return <ModelsContainer finishes={finishes} models={models} />;
};

export default ModelsPage;
