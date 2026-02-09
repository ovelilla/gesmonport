"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadArchitraveFamiliesReturn,
  ReadArchitraveFinishesReturn,
  ReadArchitraveModelsReturn,
  ReadArchitraveTypesReturn,
  ReadBudgetsReturn,
  ReadCustomersReturn,
  ReadDoorExtrasReturn,
  ReadDoorFamiliesReturn,
  ReadDoorFinishesReturn,
  ReadDoorModelsReturn,
  ReadDoorTypesReturn,
  ReadFrameFamiliesReturn,
  ReadFrameFinishesReturn,
  ReadFrameModelsReturn,
  ReadFrameTypesReturn,
  ReadGlassFamiliesReturn,
  ReadGlassFinishesReturn,
  ReadGlassModelsReturn,
  ReadGlassTypesReturn,
  ReadHardwaresReturn,
  ReadHardwareTypesReturn,
  ReadPaymentMethodsReturn,
} from "./types/budgets.actions.types";

const generateUniqueRandomNumber = async (): Promise<number> => {
  const existingNumbers = await prisma.budget.findMany({
    select: { number: true },
  });

  const existingSet = new Set(existingNumbers.map((budget) => budget.number));

  let number;

  do {
    number = Math.floor(Math.random() * 999999) + 1;
  } while (existingSet.has(number));

  return number;
};

const readArchitraveFamilies =
  async (): Promise<ReadArchitraveFamiliesReturn> => {
    try {
      const architraveFamilies = await prisma.architraveFamily.findMany({
        orderBy: { name: "asc" },
        include: {
          models: { include: { architraveModel: true } },
          prices: true,
        },
      });
      const transformed = architraveFamilies.map((family) => ({
        ...family,
        models: family.models.map((model) => model.architraveModel),
      }));
      return transformed;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

const readArchitraveFinishes =
  async (): Promise<ReadArchitraveFinishesReturn> => {
    try {
      const architraveFinishes = await prisma.architraveFinish.findMany({
        orderBy: { name: "asc" },
        include: {
          prices: true,
        },
      });
      return architraveFinishes;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

const readArchitraveModels = async (): Promise<ReadArchitraveModelsReturn> => {
  try {
    const architraveModels = await prisma.architraveModel.findMany({
      orderBy: { name: "asc" },
      include: {
        finishes: { include: { architraveFinish: true } },
        prices: true,
      },
    });
    const transformed = architraveModels.map((model) => ({
      ...model,
      finishes: model.finishes.map((finish) => finish.architraveFinish),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readArchitraveTypes = async (): Promise<ReadArchitraveTypesReturn> => {
  try {
    const architraveTypes = await prisma.architraveType.findMany({
      orderBy: { name: "asc" },
      include: {
        families: { include: { architraveFamily: true } },
        prices: true,
      },
    });
    const transformed = architraveTypes.map((type) => ({
      ...type,
      families: type.families.map((family) => family.architraveFamily),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readBudgets = async (): Promise<ReadBudgetsReturn> => {
  try {
    const budgets = await prisma.budget.findMany({
      orderBy: { createdAt: "desc" },
      include: { customer: true },
    });
    return budgets;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readCustomers = async (): Promise<ReadCustomersReturn> => {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: { name: "asc" },
      include: { paymentMethod: true },
    });
    return customers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readDoorFamilies = async (): Promise<ReadDoorFamiliesReturn> => {
  try {
    const doorFamilies = await prisma.doorFamily.findMany({
      orderBy: { name: "asc" },
      include: {
        models: { include: { doorModel: true } },
        prices: true,
      },
    });
    const transformed = doorFamilies.map((family) => ({
      ...family,
      models: family.models.map((model) => model.doorModel),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readDoorFinishes = async (): Promise<ReadDoorFinishesReturn> => {
  try {
    const doorFinishes = await prisma.doorFinish.findMany({
      orderBy: { name: "asc" },
      include: {
        prices: true,
      },
    });
    return doorFinishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readDoorExtras = async (): Promise<ReadDoorExtrasReturn> => {
  try {
    const extras = await prisma.doorExtra.findMany({
      orderBy: { name: "asc" },
    });

    return extras;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readDoorModels = async (): Promise<ReadDoorModelsReturn> => {
  try {
    const doorModels = await prisma.doorModel.findMany({
      orderBy: { name: "asc" },
      include: {
        finishes: { include: { doorFinish: true } },
        prices: true,
      },
    });
    const transformed = doorModels.map((model) => ({
      ...model,
      finishes: model.finishes.map((finish) => finish.doorFinish),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readDoorTypes = async (): Promise<ReadDoorTypesReturn> => {
  try {
    const doorTypes = await prisma.doorType.findMany({
      orderBy: { name: "asc" },
      include: {
        families: { include: { doorFamily: true } },
        prices: true,
      },
    });
    const transformed = doorTypes.map((type) => ({
      ...type,
      families: type.families.map((family) => family.doorFamily),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readFrameFamilies = async (): Promise<ReadFrameFamiliesReturn> => {
  try {
    const frameFamilies = await prisma.frameFamily.findMany({
      orderBy: { name: "asc" },
      include: {
        models: { include: { frameModel: true } },
        prices: true,
      },
    });
    const transformed = frameFamilies.map((family) => ({
      ...family,
      models: family.models.map((model) => model.frameModel),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readFrameFinishes = async (): Promise<ReadFrameFinishesReturn> => {
  try {
    const frameFinishes = await prisma.frameFinish.findMany({
      orderBy: { name: "asc" },
      include: {
        prices: true,
      },
    });
    return frameFinishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readFrameModels = async (): Promise<ReadFrameModelsReturn> => {
  try {
    const frameModels = await prisma.frameModel.findMany({
      orderBy: { name: "asc" },
      include: {
        finishes: { include: { frameFinish: true } },
        prices: true,
      },
    });
    const transformed = frameModels.map((model) => ({
      ...model,
      finishes: model.finishes.map((finish) => finish.frameFinish),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readFrameTypes = async (): Promise<ReadFrameTypesReturn> => {
  try {
    const frameTypes = await prisma.frameType.findMany({
      orderBy: { name: "asc" },
      include: {
        families: { include: { frameFamily: true } },
        prices: true,
      },
    });
    const transformed = frameTypes.map((type) => ({
      ...type,
      families: type.families.map((family) => family.frameFamily),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readGlassFamilies = async (): Promise<ReadGlassFamiliesReturn> => {
  try {
    const glassFamilies = await prisma.glassFamily.findMany({
      orderBy: { name: "asc" },
      include: {
        models: { include: { glassModel: true } },
        prices: true,
      },
    });
    const transformed = glassFamilies.map((family) => ({
      ...family,
      models: family.models.map((model) => model.glassModel),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readGlassFinishes = async (): Promise<ReadGlassFinishesReturn> => {
  try {
    const glassFinishes = await prisma.glassFinish.findMany({
      orderBy: { name: "asc" },
      include: {
        prices: true,
      },
    });
    return glassFinishes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readGlassModels = async (): Promise<ReadGlassModelsReturn> => {
  try {
    const glassModels = await prisma.glassModel.findMany({
      orderBy: { name: "asc" },
      include: {
        finishes: { include: { glassFinish: true } },
        prices: true,
      },
    });
    const transformed = glassModels.map((model) => ({
      ...model,
      finishes: model.finishes.map((finish) => finish.glassFinish),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readGlassTypes = async (): Promise<ReadGlassTypesReturn> => {
  try {
    const glassTypes = await prisma.glassType.findMany({
      orderBy: { name: "asc" },
      include: {
        families: { include: { glassFamily: true } },
        prices: true,
      },
    });
    const transformed = glassTypes.map((type) => ({
      ...type,
      families: type.families.map((family) => family.glassFamily),
    }));
    return transformed;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readHardwares = async (): Promise<ReadHardwaresReturn> => {
  try {
    const hardwareItems = await prisma.hardware.findMany({
      orderBy: { name: "asc" },
      include: {
        doorTypes: {
          include: {
            doorType: {
              include: { prices: true },
            },
          },
        },
        finish: true,
        images: true,
        type: true,
      },
    });

    const hardwares = hardwareItems.map((hardware) => ({
      ...hardware,
      doorTypes: hardware.doorTypes.map((dt) => dt.doorType),
    }));

    return hardwares;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readHardwareTypes = async (): Promise<ReadHardwareTypesReturn> => {
  try {
    const hardwareTypes = await prisma.hardwareType.findMany({
      orderBy: { name: "asc" },
    });
    return hardwareTypes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readPaymentMethods = async (): Promise<ReadPaymentMethodsReturn> => {
  try {
    const paymentMethods = await prisma.paymentMethod.findMany({
      orderBy: { name: "asc" },
    });
    return paymentMethods;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export {
  generateUniqueRandomNumber,
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
};
