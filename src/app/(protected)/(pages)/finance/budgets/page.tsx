// Actions
import {
  readArchitraves,
  readBudgets,
  readCustomers,
  readDoors,
  readFrames,
  readHardwares,
  readPaymentMethods,
} from "./actions/budgets.actions";
// Containers
import { BudgetsContainer } from "./budgets.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presupuestos",
  description: "Página de presupuestos",
};

const BudgetsPage = async () => {
  const [
    architraves,
    budgets,
    customers,
    doors,
    frames,
    hardwares,
    paymentMethods,
  ] = await Promise.all([
    readArchitraves(),
    readBudgets(),
    readCustomers(),
    readDoors(),
    readFrames(),
    readHardwares(),
    readPaymentMethods(),
  ]);

  return (
    <BudgetsContainer
      architraves={architraves}
      budgets={budgets}
      customers={customers}
      doors={doors}
      frames={frames}
      hardwares={hardwares}
      paymentMethods={paymentMethods}
    />
  );
};

export default BudgetsPage;
