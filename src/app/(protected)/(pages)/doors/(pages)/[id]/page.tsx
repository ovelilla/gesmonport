// Actions
import { readDoor } from "./actions/door.actions";
// Components
import { DoorContainer } from "./door.container";
// Types
import type {
  DoorPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const door = await readDoor({ id });

  if (!door) {
    return {
      title: "Puerta no encontrada",
      description: "Puerta no encontrada.",
    };
  }

  return {
    title: `Puerta ${door.name}`,
    description: `Puerta ${door.name} con referencia ${door.reference}.`,
  };
};

const DoorPage = async ({ params }: DoorPageProps) => {
  const { id } = await params;

  const door = await readDoor({ id });

  if (!door) {
    return <div className="p-4 text-center">Puerta no encontrada.</div>;
  }

  return <DoorContainer door={door} />;
};

export { generateMetadata };
export default DoorPage;
