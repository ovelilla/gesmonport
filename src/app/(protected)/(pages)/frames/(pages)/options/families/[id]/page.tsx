// Actions
import { readFamily } from "./actions/family.actions";
// Components
import { FamilyContainer } from "./family.container";
// Types
import type {
  FamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const family = await readFamily({ id });

  if (!family) {
    return {
      title: "Familia no encontrado",
      description: "Familia no encontrado.",
    };
  }

  return {
    title: `Familia ${family.name}`,
    description: `Familia ${family.name} con referencia ${family.reference}.`,
  };
};

const FamilyPage = async ({ params }: FamilyPageProps) => {
  const { id } = await params;

  const family = await readFamily({ id });

  if (!family) {
    return <div className="p-4 text-center">Familia no encontrado.</div>;
  }

  return <FamilyContainer family={family} />;
};

export { generateMetadata };
export default FamilyPage;
