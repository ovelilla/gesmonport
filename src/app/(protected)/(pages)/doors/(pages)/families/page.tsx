// Actions
import { readFamilies, readModels } from "./actions/families.actions";
// Containers
import { FamiliesContainer } from "./families.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Familias de puertas",
  description: "Página de familias de puertas",
};

const FamiliesPage = async () => {
  const [families, models] = await Promise.all([readFamilies(), readModels()]);

  return <FamiliesContainer families={families} models={models} />;
};

export default FamiliesPage;
