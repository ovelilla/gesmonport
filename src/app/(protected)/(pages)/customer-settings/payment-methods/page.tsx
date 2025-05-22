// Actions
import { readPaymentMethods } from "./actions/payment-methods.actions";
// Containers
import { PaymentMethodsContainer } from "./payment-methods.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formas de pago",
  description: "Página de formas de pago",
};

const PaymentMethodsPage = async () => {
  const paymentMethods = await readPaymentMethods();
  return <PaymentMethodsContainer paymentMethods={paymentMethods} />;
};

export default PaymentMethodsPage;
