// Actions
import { readTypes } from "./actions/types.actions";
// Containers
import { TypesContainer } from "./types.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tipos de herrajes",
  description: "Página de tipos de herrajes",
};

const TypesPage = async () => {
  const types = await readTypes();
  return <TypesContainer types={types} />;
};

export default TypesPage;
