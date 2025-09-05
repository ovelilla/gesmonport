// Actions
import { readFinish } from "./actions/finish.actions";
// Components
import { FinishContainer } from "./finish.container";
// Types
import type {
  FinishPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const finish = await readFinish({ id });

  if (!finish) {
    return {
      title: "Acabado no encontrado",
      description: "Acabado no encontrado.",
    };
  }

  return {
    title: `Acabado ${finish.name}`,
    description: `Acabado ${finish.name} con referencia ${finish.reference}.`,
  };
};

const FinishPage = async ({ params }: FinishPageProps) => {
  const { id } = await params;

  const finish = await readFinish({ id });

  if (!finish) {
    return <div className="p-4 text-center">Acabado no encontrado.</div>;
  }

  return <FinishContainer finish={finish} />;
};

export { generateMetadata };
export default FinishPage;
