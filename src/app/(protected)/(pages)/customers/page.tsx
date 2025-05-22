// Actions
import { readCustomers, readPaymentMethods } from "./actions/customers.actions";
// Containers
import { CustomersContainer } from "./customers.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Página de clientes",
};

const CustomersPage = async () => {
  const [customers, paymentMethods] = await Promise.all([
    readCustomers(),
    readPaymentMethods(),
  ]);

  return (
    <CustomersContainer customers={customers} paymentMethods={paymentMethods} />
  );
};

export default CustomersPage;
