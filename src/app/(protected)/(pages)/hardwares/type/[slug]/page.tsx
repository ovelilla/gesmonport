// Actions
import {
  readDoorTypes,
  readHardwares,
  readHardwareFinishes,
  readHardwareType,
} from "./actions/hardware.actions";
// Components
import { HardwareContainer } from "./hardware.container";
// Types
import type {
  PricingPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { slug } = await params;
  const hardwareType = await readHardwareType({ slug });

  if (!hardwareType) {
    return {
      title: "Herraje no encontrado",
      description: "El herraje que buscas no existe",
    };
  }

  return {
    title: `Herraje ${hardwareType.name}`,
    description: `Página del herraje ${hardwareType.name}`,
  };
};

const HardwarePage = async ({ params }: PricingPageProps) => {
  const { slug } = await params;

  const [doorTypes, hardwares, hardwaresFinishes, hardwareType] =
    await Promise.all([
      readDoorTypes(),
      readHardwares({ slug }),
      readHardwareFinishes(),
      readHardwareType({ slug }),
    ]);

  if (!hardwareType) {
    return <div className="p-4">Herraje no encontrado</div>;
  }

  return (
    <HardwareContainer
      doorTypes={doorTypes}
      hardwares={hardwares}
      hardwaresFinishes={hardwaresFinishes}
      hardwareType={hardwareType}
      slug={slug}
    />
  );
};

export { generateMetadata };
export default HardwarePage;
