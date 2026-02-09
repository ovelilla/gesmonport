// Actions
import { readFamilies, readTypes } from "./actions/types.actions";
// Containers
import { TypesContainer } from "./types.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tipos de marcos",
  description: "Página de tipos de marcos",
};

const TypesPage = async () => {
  const [families, types] = await Promise.all([readFamilies(), readTypes()]);

  return <TypesContainer families={families} types={types} />;
};

export default TypesPage;
