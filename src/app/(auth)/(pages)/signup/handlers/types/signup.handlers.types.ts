// Vendors
import type { Dispatch, SetStateAction } from "react";
import type { SignUpSchema } from "../../schemas/types/signup.schema.types";
import type { UseFormReturn } from "react-hook-form";

type SignUpHandlersProps = {
  form: UseFormReturn<SignUpSchema>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
};

type SignUpHandlersReturn = {
  handleSubmit: (values: SignUpSchema) => void;
  handleToggleShowPassword: VoidFunction;
};

type SubmitHandlerProps = Pick<SignUpHandlersProps, "form" | "setLoading"> & {
  values: SignUpSchema;
};

type ToggleShowPasswordHandlerProps = Pick<
  SignUpHandlersProps,
  "setShowPassword" | "showPassword"
>;

export type {
  SignUpHandlersProps,
  SignUpHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
};
