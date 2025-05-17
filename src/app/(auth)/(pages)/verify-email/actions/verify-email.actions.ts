"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Types
import type {
  VerifyEmailActionProps,
  VerifyEmailActionReturn,
} from "./types/verify-emails.actions.types";

const verifyEmailAction = async ({
  token,
}: VerifyEmailActionProps): Promise<VerifyEmailActionReturn> => {
  if (!token) {
    return {
      status: "error",
      message: "Falta el enlace de verificación o no es válido",
    };
  }

  try {
    const existingToken = await prisma.verificationToken.findUnique({
      where: { token },
      select: { id: true, email: true, expires: true },
    });

    if (!existingToken) {
      return {
        status: "error",
        message: "Este enlace de verificación no es válido",
      };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      return {
        status: "error",
        message: "Este enlace de verificación ha expirado",
      };
    }

    const existingUser = await prisma.user.findFirst({
      where: { email: existingToken.email },
      select: { id: true },
    });

    if (!existingUser) {
      return {
        status: "error",
        message: "No se ha encontrado ninguna cuenta asociada a este correo",
      };
    }

    await prisma.user.update({
      where: { id: existingUser.id },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });

    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });

    return {
      status: "success",
      message:
        "Tu correo ha sido verificado correctamente. Ya puedes iniciar sesión en tu cuenta.",
    };
  } catch (error) {
    console.error("Verify email error:", error);
    return {
      status: "error",
      message: "Ha ocurrido un error inesperado",
    };
  }
};

export { verifyEmailAction };
