// Actions
import { readExtras } from "./actions/extras.actions";
// Containers
import { ExtrasContainer } from "./extras.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extras de puertas",
  description: "Página de extras de puertas",
};

const ExtrasPage = async () => {
  const extras = await readExtras();
  return <ExtrasContainer extras={extras} />;
};

export default ExtrasPage;
