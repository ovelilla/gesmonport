"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { typeSchema } from "../schemas/types.schema";
// Types
import type {
  CreateTypeProps,
  CreateTypeReturn,
  DeleteTypeProps,
  DeleteTypeReturn,
  DeleteMultipleTypesProps,
  DeleteMultipleTypesReturn,
  ReadTypesReturn,
  UpdateTypeProps,
  UpdateTypeReturn,
} from "./types/types.actions.types";

const createType = async ({
  values,
}: CreateTypeProps): Promise<CreateTypeReturn> => {
  const validatedFields = typeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newType = await prisma.type.create({
      data: validatedFields.data,
    });

    return { success: "Tipo creado con éxito", client: newType };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el tipo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteType = async ({
  id,
}: DeleteTypeProps): Promise<DeleteTypeReturn> => {
  try {
    await prisma.type.delete({
      where: { id },
    });
    return { success: "Tipo eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el tipo. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleTypes = async ({
  ids,
}: DeleteMultipleTypesProps): Promise<DeleteMultipleTypesReturn> => {
  try {
    await prisma.type.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Tipos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los tipos. Por favor, inténtalo de nuevo",
    };
  }
};

const readTypes = async (): Promise<ReadTypesReturn> => {
  try {
    const types = await prisma.type.findMany({
      orderBy: { name: "asc" },
    });
    return types;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateType = async ({
  id,
  values,
}: UpdateTypeProps): Promise<UpdateTypeReturn> => {
  const validatedFields = typeSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedType = await prisma.type.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Tipo actualizado con éxito",
      client: updatedType,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el tipo. Por favor, inténtalo de nuevo",
    };
  }
};

export { createType, deleteType, deleteMultipleTypes, readTypes, updateType };
