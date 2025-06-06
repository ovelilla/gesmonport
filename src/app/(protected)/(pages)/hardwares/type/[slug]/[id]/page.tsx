// Actions
import { readHardware } from "./actions/hardware.actions";
// Components
import { HardwareContainer } from "./hardware.container";
// Types
import type {
  HardwarePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const hardware = await readHardware({ id });

  if (!hardware) {
    return {
      title: "Herraje no encontrado",
      description: "Herraje no encontrado.",
    };
  }

  return {
    title: `Herraje ${hardware.name}`,
    description: `Herraje ${hardware.name} con referencia ${hardware.reference}.`,
  };
};

const HardwarePage = async ({ params }: HardwarePageProps) => {
  const { id } = await params;

  const hardware = await readHardware({ id });

  if (!hardware) {
    return <div className="p-4 text-center">Herraje no encontrado.</div>;
  }

  return <HardwareContainer hardware={hardware} />;
};

export { generateMetadata };
export default HardwarePage;
