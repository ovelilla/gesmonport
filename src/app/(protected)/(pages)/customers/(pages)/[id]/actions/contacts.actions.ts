"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { contactSchema } from "../schemas/contact.schema";
// Types
import type {
  CreateContactProps,
  CreateContactReturn,
  DeleteContactProps,
  DeleteContactReturn,
  DeleteMultipleContactsProps,
  DeleteMultipleContactsReturn,
  ReadCustomerProps,
  ReadCustomerReturn,
  ReadContactsProps,
  ReadContactsReturn,
  ReadDepartmentsReturn,
  ReadPositionsReturn,
  UpdateContactProps,
  UpdateContactReturn,
} from "./types/contacts.actions.types";

const createContact = async ({
  id,
  values,
}: CreateContactProps): Promise<CreateContactReturn> => {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newContact = await prisma.contact.create({
      data: {
        ...validatedFields.data,
        customerId: id,
      },
      include: { department: true, position: true },
    });

    return { success: "Contacto creado con éxito", contact: newContact };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el contacto. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteContact = async ({
  id,
}: DeleteContactProps): Promise<DeleteContactReturn> => {
  try {
    await prisma.contact.delete({
      where: { id },
    });
    return { success: "Contacto eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el contacto. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleContacts = async ({
  ids,
}: DeleteMultipleContactsProps): Promise<DeleteMultipleContactsReturn> => {
  try {
    await prisma.contact.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Contactos eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los contactos. Por favor, inténtalo de nuevo",
    };
  }
};

const readCustomer = async ({
  id,
}: ReadCustomerProps): Promise<ReadCustomerReturn> => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id },
      include: { paymentMethod: true },
    });
    if (!customer) {
      return null;
    }
    return customer;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const readContacts = async ({
  id,
}: ReadContactsProps): Promise<ReadContactsReturn> => {
  try {
    const contacts = await prisma.contact.findMany({
      where: { customerId: id },
      orderBy: { name: "asc" },
      include: { department: true, position: true },
    });
    return contacts;
  } catch (error) {
    console.error(error);
    return [];
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

const updateContact = async ({
  id,
  values,
}: UpdateContactProps): Promise<UpdateContactReturn> => {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedContact = await prisma.contact.update({
      where: { id },
      data: validatedFields.data,
      include: { department: true, position: true },
    });

    return {
      success: "Contacto actualizado con éxito",
      contact: updatedContact,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el contacto. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createContact,
  deleteContact,
  deleteMultipleContacts,
  readCustomer,
  readContacts,
  readDepartments,
  readPositions,
  updateContact,
};
