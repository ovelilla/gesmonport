// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/forgot-password.constants";
// Handlers
import { ForgotPasswordHandlers } from "../handlers/forgot-password.handlers";
// Schemas
import { forgotPasswordSchema } from "../schemas/forgot-password.schema";
// Types
import type { ForgotPasswordSchema } from "../schemas/types/forgot-password.schema.types";
import type { ForgotPasswordHookReturn } from "./types/forgot-password.hook.types";

const ForgotPasswordHook = (): ForgotPasswordHookReturn => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit } = ForgotPasswordHandlers({
    form,
    setLoading,
  });

  return {
    form,
    handleSubmit,
    loading,
  };
};

export { ForgotPasswordHook };
