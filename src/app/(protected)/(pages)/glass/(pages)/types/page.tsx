// Actions
import { readFamilies, readTypes } from "./actions/types.actions";
// Containers
import { TypesContainer } from "./types.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tipos de vidrios",
  description: "Página de tipos de vidrios",
};

const TypesPage = async () => {
  const [families, types] = await Promise.all([readFamilies(), readTypes()]);

  return <TypesContainer families={families} types={types} />;
};

export default TypesPage;
