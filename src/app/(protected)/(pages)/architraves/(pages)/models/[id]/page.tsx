// Actions
import { readArchitraveModel } from "./actions/architrave-model.actions";
// Components
import { ArchitraveModelContainer } from "./architrave-model.container";
// Types
import type {
  ArchitraveModelPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const architraveModel = await readArchitraveModel({ id });

  if (!architraveModel) {
    return {
      title: "Modelo de puertas no encontrada",
      description: "Modelo de puertas no encontrada.",
    };
  }

  return {
    title: `Modelo de puertas ${architraveModel.name}`,
    description: `Modelo de puertas ${architraveModel.name}.`,
  };
};

const ArchitraveModelPage = async ({ params }: ArchitraveModelPageProps) => {
  const { id } = await params;

  const architraveModel = await readArchitraveModel({ id });

  if (!architraveModel) {
    return (
      <div className="p-4 text-center">Modelo de puertas no encontrada.</div>
    );
  }

  return <ArchitraveModelContainer architraveModel={architraveModel} />;
};

export { generateMetadata };
export default ArchitraveModelPage;
