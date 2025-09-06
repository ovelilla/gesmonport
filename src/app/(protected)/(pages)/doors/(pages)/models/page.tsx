// Actions
import { readModels } from "./actions/models.actions";
// Containers
import { ModelsContainer } from "./models.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelos de puertas",
  description: "Página de modelos de puertas",
};

const ModelsPage = async () => {
  const models = await readModels();
  return <ModelsContainer models={models} />;
};

export default ModelsPage;
