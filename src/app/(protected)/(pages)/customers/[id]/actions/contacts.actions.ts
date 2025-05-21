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

  const { name, email, phone } = values;

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        customer: {
          connect: { id },
        },
      },
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
    });
    return contacts;
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

  const { name, email, phone } = values;

  try {
    const updatedContact = await prisma.contact.update({
      where: { id },
      data: {
        name,
        email,
        phone: phone || null,
      },
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
  updateContact,
};
