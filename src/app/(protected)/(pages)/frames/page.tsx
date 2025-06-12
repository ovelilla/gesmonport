// Actions
import {
  readFamilies,
  readFinishes,
  readFrames,
  readTypes,
} from "./actions/frames.actions";
// Containers
import { FramesContainer } from "./frames.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcos",
  description: "Página de marcos",
};

const FramesPage = async () => {
  const [families, finishes, frames, types] = await Promise.all([
    readFamilies(),
    readFinishes(),
    readFrames(),
    readTypes(),
  ]);

  return (
    <FramesContainer
      families={families}
      finishes={finishes}
      frames={frames}
      types={types}
    />
  );
};

export default FramesPage;
