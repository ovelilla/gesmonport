// Actions
import { readDoorFinish } from "./actions/door-finish.actions";
// Components
import { DoorFinishContainer } from "./door-finish.container";
// Types
import type {
  DoorFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const doorFinish = await readDoorFinish({ id });

  if (!doorFinish) {
    return {
      title: "Acabado de puertas no encontrada",
      description: "Acabado de puertas no encontrada.",
    };
  }

  return {
    title: `Acabado de puertas ${doorFinish.name}`,
    description: `Acabado de puertas ${doorFinish.name}.`,
  };
};

const DoorFinishPage = async ({ params }: DoorFinishPageProps) => {
  const { id } = await params;

  const doorFinish = await readDoorFinish({ id });

  if (!doorFinish) {
    return (
      <div className="p-4 text-center">Acabado de puertas no encontrada.</div>
    );
  }

  return <DoorFinishContainer doorFinish={doorFinish} />;
};

export { generateMetadata };
export default DoorFinishPage;
