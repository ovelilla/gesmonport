"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type { ReadHardwareTypesReturn } from "./types/dashboard.actions.types";

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

export { readHardwareTypes };
