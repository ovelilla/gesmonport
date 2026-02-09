// Actions
import { readFrameModel } from "./actions/frame-model.actions";
// Components
import { FrameModelContainer } from "./frame-model.container";
// Types
import type {
  FrameModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const frameModel = await readFrameModel({ id });

  if (!frameModel) {
    return {
      title: "Modelo de marcos no encontrada",
      description: "Modelo de marcos no encontrada.",
    };
  }

  return {
    title: `Modelo de marcos ${frameModel.name}`,
    description: `Modelo de marcos ${frameModel.name}.`,
  };
};

const FrameModelPage = async ({ params }: FrameModelPageProps) => {
  const { id } = await params;

  const frameModel = await readFrameModel({ id });

  if (!frameModel) {
    return (
      <div className="p-4 text-center">Modelo de marcos no encontrada.</div>
    );
  }

  return <FrameModelContainer frameModel={frameModel} />;
};

export { generateMetadata };
export default FrameModelPage;
