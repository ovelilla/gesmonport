"use server";
// Vendors
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
// i18n
// Libs
import { prisma } from "@/lib/db/prisma";
import { signIn } from "@/lib/auth/auth";
// Schemas
import { signInSchema } from "../schemas/signin.schema";
// Services
import { generateVerificationToken } from "@/app/(auth)/(pages)/signup/actions/services/generate-verification-token.service";
import { sendVerificationTokenEmail } from "@/app/(auth)/(pages)/signup/actions/services/send-verification-token-email.service";
// Types
import type {
  SignInActionProps,
  SignInActionReturn,
} from "./types/signin.actions.types";

const signInAction = async ({
  values,
}: SignInActionProps): Promise<SignInActionReturn> => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Campos inválidos",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        emailVerified: true,
        password: true,
        isAuthorized: true,
      },
    });

    if (!existingUser || !existingUser.password) {
      return {
        status: "error",
        message: "Credenciales inválidas",
      };
    }

    if (!existingUser.isAuthorized) {
      return {
        status: "error",
        message: "Usuario no autorizado",
      };
    }

    if (!existingUser.emailVerified) {
      const verificationToken = await generateVerificationToken({ email });

      await sendVerificationTokenEmail({
        email: verificationToken.email,
        token: verificationToken.token,
      });

      return {
        status: "verificationRequired",
        message:
          "Hemos enviado un correo de verificación. Por favor, revisa tu bandeja de entrada",
      };
    }
  } catch (error) {
    console.error("Error in signInAction:", error);
    return {
      status: "error",
      message: "Ha ocurrido un error inesperado",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return {
      status: "success",
      message: "Inicio de sesión exitoso",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect("/auth-error");
    }

    throw error;
  }
};

export { signInAction };
