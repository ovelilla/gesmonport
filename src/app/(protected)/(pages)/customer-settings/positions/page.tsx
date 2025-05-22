// Actions
import { readPositions } from "./actions/positions.actions";
// Containers
import { PositionsContainer } from "./positions.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargos",
  description: "Página de cargos",
};

const PositionsPage = async () => {
  const positions = await readPositions();
  return <PositionsContainer positions={positions} />;
};

export default PositionsPage;
