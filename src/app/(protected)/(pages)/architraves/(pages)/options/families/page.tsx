// Actions
import { readFamilies } from "./actions/families.actions";
// Containers
import { FamiliesContainer } from "./families.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Familias de tapajuntas",
  description: "Página de familias de tapajuntas",
};

const FamiliesPage = async () => {
  const families = await readFamilies();
  return <FamiliesContainer families={families} />;
};

export default FamiliesPage;
