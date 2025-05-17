// Containers
import { ResetPasswordContainer } from "./reset-password.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restablecer contraseña",
  description: "Establece una nueva contraseña para acceder a tu cuenta",
};

const ResetPasswordPage = () => {
  return <ResetPasswordContainer />;
};

export default ResetPasswordPage;
