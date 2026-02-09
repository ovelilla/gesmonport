// Actions
import { readGlassType } from "./actions/glass-type.actions";
// Components
import { GlassTypeContainer } from "./glass-type.container";
// Types
import type {
  GlassTypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const glassType = await readGlassType({ id });

  if (!glassType) {
    return {
      title: "Tipo de vidrios no encontrada",
      description: "Tipo de vidrios no encontrada.",
    };
  }

  return {
    title: `Tipo de vidrios ${glassType.name}`,
    description: `Tipo de vidrios ${glassType.name}.`,
  };
};

const GlassTypePage = async ({ params }: GlassTypePageProps) => {
  const { id } = await params;

  const glassType = await readGlassType({ id });

  if (!glassType) {
    return (
      <div className="p-4 text-center">Tipo de vidrios no encontrada.</div>
    );
  }

  return <GlassTypeContainer glassType={glassType} />;
};

export { generateMetadata };
export default GlassTypePage;
