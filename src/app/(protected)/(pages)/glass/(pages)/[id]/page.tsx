// Actions
import { readGlass } from "./actions/glass.actions";
// Components
import { GlassContainer } from "./glass.container";
// Types
import type {
  GlassPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const glass = await readGlass({ id });

  if (!glass) {
    return {
      title: "Vidrio no encontrado",
      description: "Vidrio no encontrado.",
    };
  }

  return {
    title: `Vidrio ${glass.name}`,
    description: `Vidrio ${glass.name} con referencia ${glass.reference}.`,
  };
};

const GlassPage = async ({ params }: GlassPageProps) => {
  const { id } = await params;

  const glass = await readGlass({ id });

  if (!glass) {
    return <div className="p-4 text-center">Vidrio no encontrado.</div>;
  }

  return <GlassContainer glass={glass} />;
};

export { generateMetadata };
export default GlassPage;
