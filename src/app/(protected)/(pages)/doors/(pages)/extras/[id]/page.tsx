// Actions
import { readExtra } from "./actions/extra.actions";
// Components
import { ExtraContainer } from "./extra.container";
// Types
import type {
  ExtraPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const extra = await readExtra({ id });

  if (!extra) {
    return {
      title: "Extra no encontrado",
      description: "Extra no encontrado.",
    };
  }

  return {
    title: `Extra ${extra.name}`,
    description: `Extra ${extra.name} con referencia ${extra.reference}.`,
  };
};

const ExtraPage = async ({ params }: ExtraPageProps) => {
  const { id } = await params;

  const extra = await readExtra({ id });

  if (!extra) {
    return <div className="p-4 text-center">Extra no encontrado.</div>;
  }

  return <ExtraContainer extra={extra} />;
};

export { generateMetadata };
export default ExtraPage;
