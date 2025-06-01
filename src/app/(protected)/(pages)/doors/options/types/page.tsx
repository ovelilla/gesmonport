// Actions
import { readTypes } from "./actions/types.actions";
// Containers
import { TypesContainer } from "./types.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tipos de puertas",
  description: "Página de tipos de puertas",
};

const TypesPage = async () => {
  const types = await readTypes();
  return <TypesContainer types={types} />;
};

export default TypesPage;
