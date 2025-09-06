// Actions
import { readDoorModel } from "./actions/door-model.actions";
// Components
import { DoorModelContainer } from "./door-model.container";
// Types
import type {
  DoorModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const doorModel = await readDoorModel({ id });

  if (!doorModel) {
    return {
      title: "Modelo de puertas no encontrada",
      description: "Modelo de puertas no encontrada.",
    };
  }

  return {
    title: `Modelo de puertas ${doorModel.name}`,
    description: `Modelo de puertas ${doorModel.name}.`,
  };
};

const DoorModelPage = async ({ params }: DoorModelPageProps) => {
  const { id } = await params;

  const doorModel = await readDoorModel({ id });

  if (!doorModel) {
    return (
      <div className="p-4 text-center">Modelo de puertas no encontrada.</div>
    );
  }

  return <DoorModelContainer doorModel={doorModel} />;
};

export { generateMetadata };
export default DoorModelPage;
