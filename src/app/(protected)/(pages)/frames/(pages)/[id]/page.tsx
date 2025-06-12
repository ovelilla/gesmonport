// Actions
import { readFrame } from "./actions/frame.actions";
// Components
import { FrameContainer } from "./frame.container";
// Types
import type {
  FramePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const frame = await readFrame({ id });

  if (!frame) {
    return {
      title: "Marco no encontrado",
      description: "Marco no encontrado.",
    };
  }

  return {
    title: `Marco ${frame.name}`,
    description: `Marco ${frame.name} con referencia ${frame.reference}.`,
  };
};

const FramePage = async ({ params }: FramePageProps) => {
  const { id } = await params;

  const frame = await readFrame({ id });

  if (!frame) {
    return <div className="p-4 text-center">Marco no encontrado.</div>;
  }

  return <FrameContainer frame={frame} />;
};

export { generateMetadata };
export default FramePage;
