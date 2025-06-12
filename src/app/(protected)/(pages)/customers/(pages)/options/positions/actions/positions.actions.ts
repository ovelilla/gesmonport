"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { positionSchema } from "../schemas/position.schema";
// Types
import type {
  CreatePositionProps,
  CreatePositionReturn,
  DeletePositionProps,
  DeletePositionReturn,
  DeleteMultiplePositionsProps,
  DeleteMultiplePositionsReturn,
  ReadPositionsReturn,
  UpdatePositionProps,
  UpdatePositionReturn,
} from "./types/positions.actions.types";

const createPosition = async ({
  values,
}: CreatePositionProps): Promise<CreatePositionReturn> => {
  const validatedFields = positionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newPosition = await prisma.position.create({
      data: validatedFields.data,
    });

    return { success: "Cargo creado con éxito", client: newPosition };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el cargo. Por favor, inténtalo de nuevo",
    };
  }
};

const deletePosition = async ({
  id,
}: DeletePositionProps): Promise<DeletePositionReturn> => {
  try {
    await prisma.position.delete({
      where: { id },
    });
    return { success: "Cargo eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el cargo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultiplePositions = async ({
  ids,
}: DeleteMultiplePositionsProps): Promise<DeleteMultiplePositionsReturn> => {
  try {
    await prisma.position.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Cargos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los cargos. Por favor, inténtalo de nuevo",
    };
  }
};

const readPositions = async (): Promise<ReadPositionsReturn> => {
  try {
    const positions = await prisma.position.findMany({
      orderBy: { name: "asc" },
    });
    return positions;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updatePosition = async ({
  id,
  values,
}: UpdatePositionProps): Promise<UpdatePositionReturn> => {
  const validatedFields = positionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedPosition = await prisma.position.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Cargo actualizado con éxito",
      client: updatedPosition,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el cargo. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createPosition,
  deletePosition,
  deleteMultiplePositions,
  readPositions,
  updatePosition,
};
