// Actions
import {
  readArchitraves,
  readBudgets,
  readCustomers,
  readDoorFamilies,
  readDoorFinishes,
  readDoorModels,
  readDoorTypes,
  readFrames,
  readHardwares,
  readHardwareTypes,
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
    doorFamilies,
    doorFinishes,
    doorModels,
    doorTypes,
    frames,
    hardwares,
    hardwareTypes,
    paymentMethods,
  ] = await Promise.all([
    readArchitraves(),
    readBudgets(),
    readCustomers(),
    readDoorFamilies(),
    readDoorFinishes(),
    readDoorModels(),
    readDoorTypes(),
    readFrames(),
    readHardwares(),
    readHardwareTypes(),
    readPaymentMethods(),
  ]);

  return (
    <BudgetsContainer
      architraves={architraves}
      budgets={budgets}
      customers={customers}
      doorFamilies={doorFamilies}
      doorFinishes={doorFinishes}
      doorModels={doorModels}
      doorTypes={doorTypes}
      frames={frames}
      hardwares={hardwares}
      hardwareTypes={hardwareTypes}
      paymentMethods={paymentMethods}
    />
  );
};

export default BudgetsPage;
