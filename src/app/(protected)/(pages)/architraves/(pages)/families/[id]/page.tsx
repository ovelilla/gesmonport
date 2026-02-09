// Actions
import { readArchitraveFamily } from "./actions/architrave-family.actions";
// Components
import { ArchitraveFamilyContainer } from "./architrave-family.container";
// Types
import type {
  ArchitraveFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const architraveFamily = await readArchitraveFamily({ id });

  if (!architraveFamily) {
    return {
      title: "Familia de puertas no encontrada",
      description: "Familia de puertas no encontrada.",
    };
  }

  return {
    title: `Familia de puertas ${architraveFamily.name}`,
    description: `Familia de puertas ${architraveFamily.name}.`,
  };
};

const ArchitraveFamilyPage = async ({ params }: ArchitraveFamilyPageProps) => {
  const { id } = await params;

  const architraveFamily = await readArchitraveFamily({ id });

  if (!architraveFamily) {
    return (
      <div className="p-4 text-center">Familia de puertas no encontrada.</div>
    );
  }

  return <ArchitraveFamilyContainer architraveFamily={architraveFamily} />;
};

export { generateMetadata };
export default ArchitraveFamilyPage;
