// Vendors
import { useRouter } from "next/navigation";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { SignInSchema } from "../../schemas/types/signin.schema.types";
import type { UseFormReturn } from "react-hook-form";

type SignInHandlersProps = {
  form: UseFormReturn<SignInSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
};

type SignInHandlersReturn = {
  handleSubmit: (values: SignInSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type SubmitHandlerProps = Pick<
  SignInHandlersProps,
  "form" | "router" | "setLoading"
> & {
  values: SignInSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  SignInHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};
