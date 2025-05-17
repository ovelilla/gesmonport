"use server";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { forgotPasswordSchema } from "../schemas/forgot-password.schema";
// Types
import type {
  ForgotPasswordActionProps,
  ForgotPasswordActionReturn,
} from "./types/forgot-password.actions.types";
// Utils
import { generatePasswordResetToken } from "./services/generate-password-reset-token.service";
import { sendPasswordResetTokenEmail } from "./services/send-password-reset-token-email.service";

const forgotPasswordAction = async ({
  values,
}: ForgotPasswordActionProps): Promise<ForgotPasswordActionReturn> => {
  const validatedFields = forgotPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message:
        "Por favor, introduce una dirección de correo electrónico válida.",
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  if (!existingUser) {
    return {
      status: "error",
      message: "No se ha encontrado ninguna cuenta asociada a ese correo.",
    };
  }

  const passwordForgotPasswordToken = await generatePasswordResetToken({
    email,
  });

  await sendPasswordResetTokenEmail({
    email: passwordForgotPasswordToken.email,
    token: passwordForgotPasswordToken.token,
  });

  return {
    status: "success",
    message: "No se ha encontrado ninguna cuenta asociada a ese correo.",
  };
};

export { forgotPasswordAction };
