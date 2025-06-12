// Actions
import { readFamilies } from "./actions/families.actions";
// Containers
import { FamiliesContainer } from "./families.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Familias de marcos",
  description: "Página de familias de marcos",
};

const FamiliesPage = async () => {
  const families = await readFamilies();
  return <FamiliesContainer families={families} />;
};

export default FamiliesPage;
