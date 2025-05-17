// Actions
import { readCustomers } from "./actions/customers.actions";
// Containers
import { CustomersContainer } from "./customers.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Página de clientes",
};

const CustomersPage = async () => {
  const clients = await readCustomers();
  return <CustomersContainer customers={clients} />;
};

export default CustomersPage;
