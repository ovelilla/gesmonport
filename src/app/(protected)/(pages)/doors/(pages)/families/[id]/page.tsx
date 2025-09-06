// Actions
import { readDoorFamily } from "./actions/door-family.actions";
// Components
import { DoorFamilyContainer } from "./door-family.container";
// Types
import type {
  DoorFamilyPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const doorFamily = await readDoorFamily({ id });

  if (!doorFamily) {
    return {
      title: "Familia de puertas no encontrada",
      description: "Familia de puertas no encontrada.",
    };
  }

  return {
    title: `Familia de puertas ${doorFamily.name}`,
    description: `Familia de puertas ${doorFamily.name}.`,
  };
};

const DoorFamilyPage = async ({ params }: DoorFamilyPageProps) => {
  const { id } = await params;

  const doorFamily = await readDoorFamily({ id });

  if (!doorFamily) {
    return (
      <div className="p-4 text-center">Familia de puertas no encontrada.</div>
    );
  }

  return <DoorFamilyContainer doorFamily={doorFamily} />;
};

export { generateMetadata };
export default DoorFamilyPage;
