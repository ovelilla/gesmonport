// Containers
import { SignOutContainer } from "./signout.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerrar sesión",
  description: "Cierra sesión en tu cuenta",
};

const SignOutPage = async () => {
  return <SignOutContainer />;
};

export default SignOutPage;
