"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  ReadArchitravesReturn,
  ReadBudgetsReturn,
  ReadCustomersReturn,
  ReadDoorsReturn,
  ReadFramesReturn,
  ReadHardwaresReturn,
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

const readArchitraves = async (): Promise<ReadArchitravesReturn> => {
  try {
    const architraves = await prisma.architrave.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        images: true,
        type: true,
      },
    });
    return architraves;
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

const readDoors = async (): Promise<ReadDoorsReturn> => {
  try {
    const doorsRaw = await prisma.door.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        glass: {
          include: { glass: true },
        },
        images: true,
        prices: true,
        type: true,
      },
    });
    const doors = doorsRaw.map((door) => ({
      ...door,
      glass: door.glass.map((dg) => dg.glass),
    }));
    return doors;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const readFrames = async (): Promise<ReadFramesReturn> => {
  try {
    const frames = await prisma.frame.findMany({
      orderBy: { name: "asc" },
      include: {
        family: true,
        finish: true,
        images: true,
        type: true,
      },
    });
    return frames;
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
            doorType: true,
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
  readArchitraves,
  generateUniqueRandomNumber,
  readBudgets,
  readCustomers,
  readDoors,
  readFrames,
  readHardwares,
  readPaymentMethods,
};
