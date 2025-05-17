"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { customerSchema } from "../schemas/customer.schema";
// Types
import type {
  CreateCustomerProps,
  CreateCustomerReturn,
  DeleteCustomerProps,
  DeleteCustomerReturn,
  DeleteMultipleCustomersProps,
  DeleteMultipleCustomersReturn,
  ReadCustomersReturn,
  UpdateCustomerProps,
  UpdateCustomerReturn,
} from "./types/customers.actions.types";

const createCustomer = async ({
  values,
}: CreateCustomerProps): Promise<CreateCustomerReturn> => {
  const validatedFields = customerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (validatedFields.data.vatNumber) {
      const existingCustomer = await prisma.customer.findUnique({
        where: { vatNumber: validatedFields.data.vatNumber },
      });
      if (existingCustomer) {
        return {
          error: "El CIF ingresado ya está en uso. Introduce un CIF único.",
        };
      }
    }

    const newCustomer = await prisma.customer.create({
      data: validatedFields.data,
    });

    return { success: "Cliente creado con éxito", client: newCustomer };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el cliente. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteCustomer = async ({
  id,
}: DeleteCustomerProps): Promise<DeleteCustomerReturn> => {
  try {
    await prisma.customer.delete({
      where: { id },
    });
    return { success: "Cliente eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el cliente. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleCustomers = async ({
  ids,
}: DeleteMultipleCustomersProps): Promise<DeleteMultipleCustomersReturn> => {
  try {
    await prisma.customer.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Clientes eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los clientes. Por favor, inténtalo de nuevo",
    };
  }
};

const readCustomers = async (): Promise<ReadCustomersReturn> => {
  try {
    const clients = await prisma.customer.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        billingAddress: true,
        shippingAddress: true,
        vatNumber: true,
        iban: true,
        notes: true,
      },
    });
    return clients;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateCustomer = async ({
  id,
  values,
}: UpdateCustomerProps): Promise<UpdateCustomerReturn> => {
  const validatedFields = customerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    if (validatedFields.data.vatNumber) {
      const existingCustomer = await prisma.customer.findUnique({
        where: { vatNumber: validatedFields.data.vatNumber },
        select: { id: true },
      });
      if (existingCustomer && existingCustomer.id !== id) {
        return {
          error: "El CIF ingresado ya está en uso. Introduce un CIF único.",
        };
      }
    }

    const updatedCustomer = await prisma.customer.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Cliente actualizado con éxito",
      client: updatedCustomer,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el cliente. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createCustomer,
  deleteCustomer,
  deleteMultipleCustomers,
  readCustomers,
  updateCustomer,
};
