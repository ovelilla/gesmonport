// Actions
import { readType } from "./actions/type.actions";
// Components
import { TypeContainer } from "./type.container";
// Types
import type {
  TypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const type = await readType({ id });

  if (!type) {
    return {
      title: "Tipo de puerta no encontrado",
      description: "Tipo de puerta no encontrado.",
    };
  }

  return {
    title: `Tipo de puerta ${type.name}`,
    description: `Tipo de puerta ${type.name}.`,
  };
};

const TypePage = async ({ params }: TypePageProps) => {
  const { id } = await params;

  const type = await readType({ id });

  if (!type) {
    return <div className="p-4 text-center">Tipo de puerta no encontrada.</div>;
  }

  return <TypeContainer type={type} />;
};

export { generateMetadata };
export default TypePage;
