// Layouts
import { AuthLayout as AuthLayoutWrapper } from "./layouts/auth/auth.layout";
// Styles
import "./layout.css";
// Types
import type { AuthLayoutProps } from "./layouts/auth/types/auth.types";

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
};

export default AuthLayout;
