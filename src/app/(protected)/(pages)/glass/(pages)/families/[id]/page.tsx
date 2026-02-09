// Actions
import { readGlassFamily } from "./actions/glass-family.actions";
// Components
import { GlassFamilyContainer } from "./glass-family.container";
// Types
import type {
  GlassFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const glassFamily = await readGlassFamily({ id });

  if (!glassFamily) {
    return {
      title: "Familia de vidrios no encontrada",
      description: "Familia de vidrios no encontrada.",
    };
  }

  return {
    title: `Familia de vidrios ${glassFamily.name}`,
    description: `Familia de vidrios ${glassFamily.name}.`,
  };
};

const GlassFamilyPage = async ({ params }: GlassFamilyPageProps) => {
  const { id } = await params;

  const glassFamily = await readGlassFamily({ id });

  if (!glassFamily) {
    return (
      <div className="p-4 text-center">Familia de vidrios no encontrada.</div>
    );
  }

  return <GlassFamilyContainer glassFamily={glassFamily} />;
};

export { generateMetadata };
export default GlassFamilyPage;
