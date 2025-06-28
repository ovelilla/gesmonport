// Actions
import { readArchitrave } from "./actions/architrave.actions";
// Components
import { ArchitraveContainer } from "./architrave.container";
// Types
import type {
  ArchitravePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const architrave = await readArchitrave({ id });

  if (!architrave) {
    return {
      title: "Tapajuntas no encontrado",
      description: "Tapajuntas no encontrado.",
    };
  }

  return {
    title: `Tapajuntas ${architrave.name}`,
    description: `Tapajuntas ${architrave.name} con referencia ${architrave.reference}.`,
  };
};

const ArchitravePage = async ({ params }: ArchitravePageProps) => {
  const { id } = await params;

  const architrave = await readArchitrave({ id });

  if (!architrave) {
    return <div className="p-4 text-center">Tapajuntas no encontrado.</div>;
  }

  return <ArchitraveContainer architrave={architrave} />;
};

export { generateMetadata };
export default ArchitravePage;
