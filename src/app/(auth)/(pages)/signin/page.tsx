// Containers
import { SignInContainer } from "./signin.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Inicia sesión en tu cuenta",
};
const SignInPage = () => {
  return <SignInContainer />;
};

export default SignInPage;
