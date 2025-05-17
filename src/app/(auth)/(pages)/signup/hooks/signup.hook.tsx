// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/signup.constants";
// Handlers
import { SignUpHandlers } from "../handlers/signup.handlers";
// Schemas
import { signUpSchema } from "../schemas/signup.schema";
// Types
import type { SignUpSchema } from "../schemas/types/signup.schema.types";
import type { SignUpHookReturn } from "./types/signup.hook.types";

const SignUpHook = (): SignUpHookReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit, handleToggleShowPassword } = SignUpHandlers({
    form,
    setLoading,
    setShowPassword,
    showPassword,
  });

  return {
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  };
};

export { SignUpHook };
