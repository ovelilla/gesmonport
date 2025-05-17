// Actions
import { verifyEmailAction } from "./actions/verify-email.actions";
// Components
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verificación de correo",
  description: "Confirma tu dirección de correo para activar tu cuenta",
};

const VerifyEmailPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) => {
  const token = (await searchParams).token;
  const result = await verifyEmailAction({ token });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {result.status === "success"
            ? "Correo verificado"
            : "Ha ocurrido un error"}
        </CardTitle>
        <CardDescription>{result.message}</CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin", prefetch: false }}>
          Volver a iniciar sesión
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default VerifyEmailPage;
