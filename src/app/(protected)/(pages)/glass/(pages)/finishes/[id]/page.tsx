// Actions
import { readGlassFinish } from "./actions/glass-finish.actions";
// Components
import { GlassFinishContainer } from "./glass-finish.container";
// Types
import type {
  GlassFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const glassFinish = await readGlassFinish({ id });

  if (!glassFinish) {
    return {
      title: "Acabado de vidrios no encontrada",
      description: "Acabado de vidrios no encontrada.",
    };
  }

  return {
    title: `Acabado de vidrios ${glassFinish.name}`,
    description: `Acabado de vidrios ${glassFinish.name}.`,
  };
};

const GlassFinishPage = async ({ params }: GlassFinishPageProps) => {
  const { id } = await params;

  const glassFinish = await readGlassFinish({ id });

  if (!glassFinish) {
    return (
      <div className="p-4 text-center">Acabado de vidrios no encontrada.</div>
    );
  }

  return <GlassFinishContainer glassFinish={glassFinish} />;
};

export { generateMetadata };
export default GlassFinishPage;
