// Actions
import { readFrameFinish } from "./actions/frame-finish.actions";
// Components
import { FrameFinishContainer } from "./frame-finish.container";
// Types
import type {
  FrameFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const frameFinish = await readFrameFinish({ id });

  if (!frameFinish) {
    return {
      title: "Acabado de marcos no encontrada",
      description: "Acabado de marcos no encontrada.",
    };
  }

  return {
    title: `Acabado de marcos ${frameFinish.name}`,
    description: `Acabado de marcos ${frameFinish.name}.`,
  };
};

const FrameFinishPage = async ({ params }: FrameFinishPageProps) => {
  const { id } = await params;

  const frameFinish = await readFrameFinish({ id });

  if (!frameFinish) {
    return (
      <div className="p-4 text-center">Acabado de marcos no encontrada.</div>
    );
  }

  return <FrameFinishContainer frameFinish={frameFinish} />;
};

export { generateMetadata };
export default FrameFinishPage;
