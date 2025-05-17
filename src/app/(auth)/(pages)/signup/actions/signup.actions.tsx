"use server";
// Vendors
import bcryptjs from "bcryptjs";
// Libs
import { prisma } from "@/lib/db/prisma";
// Schemas
import { signUpSchema } from "../schemas/signup.schema";
// Services
import { generateVerificationToken } from "./services/generate-verification-token.service";
import { sendVerificationTokenEmail } from "./services/send-verification-token-email.service";
// Types
import type {
  SignUpActionProps,
  SignUpActionReturn,
} from "./types/signup.actions.types";

const signUpAction = async ({
  values,
}: SignUpActionProps): Promise<SignUpActionReturn> => {
  const validatedFields = signUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Campos inválidos",
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (existingUser) {
      return {
        status: "error",
        message: "El correo electrónico ya está en uso",
      };
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const verificationToken = await generateVerificationToken({ email });

    await sendVerificationTokenEmail({
      email: verificationToken.email,
      token: verificationToken.token,
    });

    return {
      status: "success",
      message: "Email de verificación enviado",
    };
  } catch (error) {
    console.error("Error in signUpAction:", error);
    return {
      status: "error",
      message: "Ha ocurrido un error inesperado",
    };
  }
};

export { signUpAction };
