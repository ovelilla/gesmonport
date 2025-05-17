// Types
import type { SignInHandlersReturn } from "../../handlers/types/signin.handlers.types";
import type { SignInSchema } from "../../schemas/types/signin.schema.types";
import type { UseFormReturn } from "react-hook-form";

type SignInHookReturn = SignInHandlersReturn & {
  form: UseFormReturn<SignInSchema>;
  loading: boolean;
  showPassword: boolean;
};

export type { SignInHookReturn };
