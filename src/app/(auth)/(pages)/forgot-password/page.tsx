// Containers
import { ForgotPasswordContainer } from "./forgot-password.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Olvidaste tu contraseña?",
  description: "Recupera tu cuenta restableciendo tu contraseña.",
};

const ForgotPasswordPage = (): React.ReactElement => {
  return <ForgotPasswordContainer />;
};

export default ForgotPasswordPage;
