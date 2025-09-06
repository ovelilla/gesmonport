// Actions
import { readFinishes } from "./actions/finishes.actions";
// Containers
import { FinishesContainer } from "./finishes.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acabados de puertas",
  description: "Página de acabados de puertas",
};

const FinishesPage = async () => {
  const finishes = await readFinishes();
  return <FinishesContainer finishes={finishes} />;
};

export default FinishesPage;
