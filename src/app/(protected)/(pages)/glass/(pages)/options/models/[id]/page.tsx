// Actions
import { readModel } from "./actions/model.actions";
// Components
import { ModelContainer } from "./model.container";
// Types
import type {
  ModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const model = await readModel({ id });

  if (!model) {
    return {
      title: "Modelo no encontrado",
      description: "Modelo no encontrado.",
    };
  }

  return {
    title: `Modelo ${model.name}`,
    description: `Modelo ${model.name} con referencia ${model.reference}.`,
  };
};

const ModelPage = async ({ params }: ModelPageProps) => {
  const { id } = await params;

  const model = await readModel({ id });

  if (!model) {
    return <div className="p-4 text-center">Modelo no encontrado.</div>;
  }

  return <ModelContainer model={model} />;
};

export { generateMetadata };
export default ModelPage;
