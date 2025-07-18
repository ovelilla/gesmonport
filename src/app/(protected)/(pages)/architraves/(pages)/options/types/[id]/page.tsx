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
      title: "Tipo de tapajuntas no encontrado",
      description: "Tipo de tapajuntas no encontrado.",
    };
  }

  return {
    title: `Tipo de tapajuntas ${type.name}`,
    description: `Tipo de tapajuntas ${type.name}.`,
  };
};

const TypePage = async ({ params }: TypePageProps) => {
  const { id } = await params;

  const type = await readType({ id });

  if (!type) {
    return <div className="p-4">Tipo de tapajuntas no encontrado.</div>;
  }

  return <TypeContainer type={type} />;
};

export { generateMetadata };
export default TypePage;
