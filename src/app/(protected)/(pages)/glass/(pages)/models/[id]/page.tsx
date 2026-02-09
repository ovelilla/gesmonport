// Actions
import { readGlassModel } from "./actions/glass-model.actions";
// Components
import { GlassModelContainer } from "./glass-model.container";
// Types
import type {
  GlassModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const glassModel = await readGlassModel({ id });

  if (!glassModel) {
    return {
      title: "Modelo de vidrios no encontrada",
      description: "Modelo de vidrios no encontrada.",
    };
  }

  return {
    title: `Modelo de vidrios ${glassModel.name}`,
    description: `Modelo de vidrios ${glassModel.name}.`,
  };
};

const GlassModelPage = async ({ params }: GlassModelPageProps) => {
  const { id } = await params;

  const glassModel = await readGlassModel({ id });

  if (!glassModel) {
    return (
      <div className="p-4 text-center">Modelo de vidrios no encontrada.</div>
    );
  }

  return <GlassModelContainer glassModel={glassModel} />;
};

export { generateMetadata };
export default GlassModelPage;
