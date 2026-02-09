// Actions
import { readFrameType } from "./actions/frame-type.actions";
// Components
import { FrameTypeContainer } from "./frame-type.container";
// Types
import type {
  FrameTypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const frameType = await readFrameType({ id });

  if (!frameType) {
    return {
      title: "Tipo de marcos no encontrada",
      description: "Tipo de marcos no encontrada.",
    };
  }

  return {
    title: `Tipo de marcos ${frameType.name}`,
    description: `Tipo de marcos ${frameType.name}.`,
  };
};

const FrameTypePage = async ({ params }: FrameTypePageProps) => {
  const { id } = await params;

  const frameType = await readFrameType({ id });

  if (!frameType) {
    return <div className="p-4 text-center">Tipo de marcos no encontrada.</div>;
  }

  return <FrameTypeContainer frameType={frameType} />;
};

export { generateMetadata };
export default FrameTypePage;
