// Containers
import { SignUpContainer } from "./signup.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse",
  description: "Regístrate para crear una cuenta",
};

const SignUpPage = () => {
  return <SignUpContainer />;
};

export default SignUpPage;
