// Actions
import { readArchitraveType } from "./actions/architrave-type.actions";
// Components
import { ArchitraveTypeContainer } from "./architrave-type.container";
// Types
import type {
  ArchitraveTypePageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const architraveType = await readArchitraveType({ id });

  if (!architraveType) {
    return {
      title: "Tipo de puertas no encontrada",
      description: "Tipo de puertas no encontrada.",
    };
  }

  return {
    title: `Tipo de puertas ${architraveType.name}`,
    description: `Tipo de puertas ${architraveType.name}.`,
  };
};

const ArchitraveTypePage = async ({ params }: ArchitraveTypePageProps) => {
  const { id } = await params;

  const architraveType = await readArchitraveType({ id });

  if (!architraveType) {
    return (
      <div className="p-4 text-center">Tipo de puertas no encontrada.</div>
    );
  }

  return <ArchitraveTypeContainer architraveType={architraveType} />;
};

export { generateMetadata };
export default ArchitraveTypePage;
