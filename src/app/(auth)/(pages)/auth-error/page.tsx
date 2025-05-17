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
  title: "Error de autenticación",
  description: "Ocurrió un error durante el proceso de autenticación",
};

const AuthErrorPage = async () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Algo ha salido mal</CardTitle>
        <CardDescription>
          No hemos podido completar tu autenticación. Por favor, inténtalo de
          nuevo.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonLink linkProps={{ href: "/signin", prefetch: false }}>
          Volver a iniciar sesión
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default AuthErrorPage;
