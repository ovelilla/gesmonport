// Actions
import {
  readCustomer,
  readContacts,
  readDepartments,
  readPositions,
} from "./actions/contacts.actions";
// Components
import { ContactsContainer } from "./contacts.container";
// Types
import type {
  ContactsPageProps,
  GenerateMetadataProps,
  GenerateMetadataReturn,
} from "./types/page.types";

const generateMetadata = async ({
  params,
}: GenerateMetadataProps): GenerateMetadataReturn => {
  const { id } = await params;
  const customer = await readCustomer({ id });

  if (!customer) {
    return {
      title: "Cliente no encontrado",
      description: "El cliente que buscas no está disponible.",
    };
  }

  return {
    title: customer.name,
    description: `Pagina del cliente ${customer.name}`,
  };
};

const ContactsPage = async ({ params }: ContactsPageProps) => {
  const { id } = await params;

  const [customer, contacts, departments, positions] = await Promise.all([
    readCustomer({ id }),
    readContacts({ id }),
    readDepartments(),
    readPositions(),
  ]);

  return (
    <ContactsContainer
      contacts={contacts}
      customer={customer}
      departments={departments}
      positions={positions}
    />
  );
};

export { generateMetadata };
export default ContactsPage;
