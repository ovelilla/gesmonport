"use client";
// Vendors
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/reset-password.constants";
// Handlers
import { ResetPasswordHandlers } from "../handlers/reset-password.handlers";
// Schemas
import { resetPasswordSchema } from "../schemas/reset-password.schema";
// Types
import type { ResetPasswordHookReturn } from "./types/reset-password.hook.types";
import type { ResetPasswordSchema } from "../schemas/types/reset-password.schema.types";

const ResetPasswordHook = (): ResetPasswordHookReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit, handleToggleShowPassword } = ResetPasswordHandlers({
    form,
    setLoading,
    setShowPassword,
    showPassword,
    token,
  });

  return {
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  };
};

export { ResetPasswordHook };
