// Actions
import { readModels } from "./actions/models.actions";
// Containers
import { ModelsContainer } from "./models.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelos de vidrios",
  description: "Página de modelos de vidrios",
};

const ModelsPage = async () => {
  const models = await readModels();
  return <ModelsContainer models={models} />;
};

export default ModelsPage;
