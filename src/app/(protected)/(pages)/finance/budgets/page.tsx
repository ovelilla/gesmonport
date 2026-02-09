// Actions
import {
  readArchitraveFamilies,
  readArchitraveFinishes,
  readArchitraveModels,
  readArchitraveTypes,
  readBudgets,
  readCustomers,
  readDoorFamilies,
  readDoorFinishes,
  readDoorExtras,
  readDoorModels,
  readDoorTypes,
  readFrameFamilies,
  readFrameFinishes,
  readFrameModels,
  readFrameTypes,
  readGlassFamilies,
  readGlassFinishes,
  readGlassModels,
  readGlassTypes,
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
    architraveFamilies,
    architraveFinishes,
    architraveModels,
    architraveTypes,
    budgets,
    customers,
    doorExtras,
    doorFamilies,
    doorFinishes,
    doorModels,
    doorTypes,
    frameFamilies,
    frameFinishes,
    frameModels,
    frameTypes,
    glassFamilies,
    glassFinishes,
    glassModels,
    glassTypes,
    hardwares,
    hardwareTypes,
    paymentMethods,
  ] = await Promise.all([
    readArchitraveFamilies(),
    readArchitraveFinishes(),
    readArchitraveModels(),
    readArchitraveTypes(),
    readBudgets(),
    readCustomers(),
    readDoorExtras(),
    readDoorFamilies(),
    readDoorFinishes(),
    readDoorModels(),
    readDoorTypes(),
    readFrameFamilies(),
    readFrameFinishes(),
    readFrameModels(),
    readFrameTypes(),
    readGlassFamilies(),
    readGlassFinishes(),
    readGlassModels(),
    readGlassTypes(),
    readHardwares(),
    readHardwareTypes(),
    readPaymentMethods(),
  ]);

  return (
    <BudgetsContainer
      architraveFamilies={architraveFamilies}
      architraveFinishes={architraveFinishes}
      architraveModels={architraveModels}
      architraveTypes={architraveTypes}
      budgets={budgets}
      customers={customers}
      doorExtras={doorExtras}
      doorFamilies={doorFamilies}
      doorFinishes={doorFinishes}
      doorModels={doorModels}
      doorTypes={doorTypes}
      frameFamilies={frameFamilies}
      frameFinishes={frameFinishes}
      frameModels={frameModels}
      frameTypes={frameTypes}
      glassFamilies={glassFamilies}
      glassFinishes={glassFinishes}
      glassModels={glassModels}
      glassTypes={glassTypes}
      hardwares={hardwares}
      hardwareTypes={hardwareTypes}
      paymentMethods={paymentMethods}
    />
  );
};

export default BudgetsPage;
