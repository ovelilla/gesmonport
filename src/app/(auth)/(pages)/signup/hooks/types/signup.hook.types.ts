// Types
import type { SignUpHandlersReturn } from "../../handlers/types/signup.handlers.types";
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";
import type { UseFormReturn } from "react-hook-form";

type SignUpHookReturn = SignUpHandlersReturn & {
  form: UseFormReturn<SignUpSchema>;
  loading: boolean;
  showPassword: boolean;
};

export type { SignUpHookReturn };
