// Types
import type { SignInSchema } from "../../schemas/types/signin.schema.types";

type SignInActionProps = {
  values: SignInSchema;
};

type SignInSuccess = {
  status: "success";
  message: string;
};

type SignInError = {
  status: "error";
  message: string;
};

type SignInVerificationRequired = {
  status: "verificationRequired";
  message: string;
};

type SignInActionReturn =
  | SignInSuccess
  | SignInError
  | SignInVerificationRequired;

export type { SignInActionProps, SignInActionReturn };
