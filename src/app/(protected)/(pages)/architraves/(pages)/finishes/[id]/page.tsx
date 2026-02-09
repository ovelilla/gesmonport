// Actions
import { readArchitraveFinish } from "./actions/architrave-finish.actions";
// Components
import { ArchitraveFinishContainer } from "./architrave-finish.container";
// Types
import type {
  ArchitraveFinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const architraveFinish = await readArchitraveFinish({ id });

  if (!architraveFinish) {
    return {
      title: "Acabado de puertas no encontrada",
      description: "Acabado de puertas no encontrada.",
    };
  }

  return {
    title: `Acabado de puertas ${architraveFinish.name}`,
    description: `Acabado de puertas ${architraveFinish.name}.`,
  };
};

const ArchitraveFinishPage = async ({ params }: ArchitraveFinishPageProps) => {
  const { id } = await params;

  const architraveFinish = await readArchitraveFinish({ id });

  if (!architraveFinish) {
    return (
      <div className="p-4 text-center">Acabado de puertas no encontrada.</div>
    );
  }

  return <ArchitraveFinishContainer architraveFinish={architraveFinish} />;
};

export { generateMetadata };
export default ArchitraveFinishPage;
