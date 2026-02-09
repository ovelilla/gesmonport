// Actions
import { readFrameFamily } from "./actions/frame-family.actions";
// Components
import { FrameFamilyContainer } from "./frame-family.container";
// Types
import type {
  FrameFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const frameFamily = await readFrameFamily({ id });

  if (!frameFamily) {
    return {
      title: "Familia de marcos no encontrada",
      description: "Familia de marcos no encontrada.",
    };
  }

  return {
    title: `Familia de marcos ${frameFamily.name}`,
    description: `Familia de marcos ${frameFamily.name}.`,
  };
};

const FrameFamilyPage = async ({ params }: FrameFamilyPageProps) => {
  const { id } = await params;

  const frameFamily = await readFrameFamily({ id });

  if (!frameFamily) {
    return (
      <div className="p-4 text-center">Familia de marcos no encontrada.</div>
    );
  }

  return <FrameFamilyContainer frameFamily={frameFamily} />;
};

export { generateMetadata };
export default FrameFamilyPage;
