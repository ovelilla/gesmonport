"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { paymentMethodSchema } from "../schemas/payment-method.schema";
// Types
import type {
  CreatePaymentMethodProps,
  CreatePaymentMethodReturn,
  DeletePaymentMethodProps,
  DeletePaymentMethodReturn,
  DeleteMultiplePaymentMethodsProps,
  DeleteMultiplePaymentMethodsReturn,
  ReadPaymentMethodsReturn,
  UpdatePaymentMethodProps,
  UpdatePaymentMethodReturn,
} from "./types/payment-methods.actions.types";

const createPaymentMethod = async ({
  values,
}: CreatePaymentMethodProps): Promise<CreatePaymentMethodReturn> => {
  const validatedFields = paymentMethodSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newPaymentMethod = await prisma.paymentMethod.create({
      data: validatedFields.data,
    });

    return {
      success: "Forma de pago creada con éxito",
      client: newPaymentMethod,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear la forma de pago. Por favor, inténtalo de nuevo",
    };
  }
};

const deletePaymentMethod = async ({
  id,
}: DeletePaymentMethodProps): Promise<DeletePaymentMethodReturn> => {
  try {
    await prisma.paymentMethod.delete({
      where: { id },
    });
    return { success: "Forma de pago eliminada con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al eliminar la forma de pago. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultiplePaymentMethods = async ({
  ids,
}: DeleteMultiplePaymentMethodsProps): Promise<DeleteMultiplePaymentMethodsReturn> => {
  try {
    await prisma.paymentMethod.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Formas de pago eliminadas con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al eliminar las formas de pago. Por favor, inténtalo de nuevo",
    };
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

const updatePaymentMethod = async ({
  id,
  values,
}: UpdatePaymentMethodProps): Promise<UpdatePaymentMethodReturn> => {
  const validatedFields = paymentMethodSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedPaymentMethod = await prisma.paymentMethod.update({
      where: { id },
      data: validatedFields.data,
    });

    return {
      success: "Forma de pago actualizada con éxito",
      client: updatedPaymentMethod,
    };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Error al actualizar la forma de pago. Por favor, inténtalo de nuevo",
    };
  }
};

export {
  createPaymentMethod,
  deletePaymentMethod,
  deleteMultiplePaymentMethods,
  readPaymentMethods,
  updatePaymentMethod,
};
