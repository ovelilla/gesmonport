// Actions
import { readDoorType } from "./actions/door-type.actions";
// Components
import { DoorTypeContainer } from "./door-type.container";
// Types
import type {
  DoorTypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const doorType = await readDoorType({ id });

  if (!doorType) {
    return {
      title: "Tipo de puertas no encontrada",
      description: "Tipo de puertas no encontrada.",
    };
  }

  return {
    title: `Tipo de puertas ${doorType.name}`,
    description: `Tipo de puertas ${doorType.name}.`,
  };
};

const DoorTypePage = async ({ params }: DoorTypePageProps) => {
  const { id } = await params;

  const doorType = await readDoorType({ id });

  if (!doorType) {
    return (
      <div className="p-4 text-center">Tipo de puertas no encontrada.</div>
    );
  }

  return <DoorTypeContainer doorType={doorType} />;
};

export { generateMetadata };
export default DoorTypePage;
