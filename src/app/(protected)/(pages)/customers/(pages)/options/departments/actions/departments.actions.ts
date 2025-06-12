"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { departmentSchema } from "../schemas/department.schema";
// Types
import type {
  CreateDepartmentProps,
  CreateDepartmentReturn,
  DeleteDepartmentProps,
  DeleteDepartmentReturn,
  DeleteMultipleDepartmentsProps,
  DeleteMultipleDepartmentsReturn,
  ReadDepartmentsReturn,
  UpdateDepartmentProps,
  UpdateDepartmentReturn,
} from "./types/departments.actions.types";

const createDepartment = async ({
  values,
}: CreateDepartmentProps): Promise<CreateDepartmentReturn> => {
  const validatedFields = departmentSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newDepartment = await prisma.department.create({
      data: validatedFields.data,
    });

    return { success: "Departamento creado con éxito", client: newDepartment };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el departamento. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteDepartment = async ({
  id,
}: DeleteDepartmentProps): Promise<DeleteDepartmentReturn> => {
  try {
    await prisma.department.delete({
      where: { id },
    });
    return { success: "Departamento eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el departamento. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleDepartments = async ({
  ids,
}: DeleteMultipleDepartmentsProps): Promise<DeleteMultipleDepartmentsReturn> => {
  try {
    await prisma.department.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Departamentos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al eliminar los departamentos. Por favor, inténtalo de nuevo",
    };
  }
};

const readDepartments = async (): Promise<ReadDepartmentsReturn> => {
  try {
    const departments = await prisma.department.findMany({
      orderBy: { name: "asc" },
    });
    return departments;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateDepartment = async ({
  id,
  values,
}: UpdateDepartmentProps): Promise<UpdateDepartmentReturn> => {
  const validatedFields = departmentSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedDepartment = await prisma.department.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Departamento actualizado con éxito",
      client: updatedDepartment,
    };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al actualizar el departamento. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createDepartment,
  deleteDepartment,
  deleteMultipleDepartments,
  readDepartments,
  updateDepartment,
};
