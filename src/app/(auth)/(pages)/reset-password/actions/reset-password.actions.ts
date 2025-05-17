"use server";
// Vendors
import bcrypt from "bcryptjs";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { resetPasswordSchema } from "../schemas/reset-password.schema";
// Types
import {
  ResetPasswordActionProps,
  ResetPasswordActionReturn,
} from "./types/reset-password.actions.types";

const resetPasswordAction = async ({
  values,
  token,
}: ResetPasswordActionProps): Promise<ResetPasswordActionReturn> => {
  if (!token) {
    return {
      status: "error",
      message: "Falta el enlace para restablecer la contraseña o no es válido",
    };
  }

  const validatedFields = resetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Campos inválidos",
    };
  }

  const { password } = validatedFields.data;

  const existingToken = await prisma.passwordResetToken.findUnique({
    where: {
      token,
    },
    select: {
      id: true,
      email: true,
      expires: true,
    },
  });

  if (!existingToken) {
    return {
      status: "error",
      message:
        "Este enlace para restablecer la contraseña no es válido o ha expirado",
    };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return {
      status: "error",
      message: "Este enlace ha caducado",
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: existingToken.email,
    },
    select: {
      id: true,
    },
  });

  if (!existingUser) {
    return {
      status: "error",
      message: "Usuario no encontrado",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return {
    status: "success",
    message: "Tu contraseña se ha restablecido correctamente",
  };
};

export { resetPasswordAction };
