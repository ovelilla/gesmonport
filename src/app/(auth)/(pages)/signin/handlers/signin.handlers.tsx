// Vendors
import { toast } from "sonner";
// Actions
import { signInAction } from "../actions/signin.actions";
// Constants
import { DEFAULT_SIGNIN_REDIRECT } from "@/constants/middleware.constants";
// Types
import type { SignInSchema } from "../schemas/types/signin.schema.types";
import type {
  SignInHandlersProps,
  SignInHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/signin.handlers.types";

const submitHandler = async ({
  form,
  router,
  setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading(true);

  try {
    const result = await signInAction({ values });

    if (result.status === "error") {
      toast.error(result.message);
      form.setValue("password", "");
      return;
    }

    if (result.status === "success") {
      toast.success(result.message);
      form.reset();
      router.push(DEFAULT_SIGNIN_REDIRECT);
      return;
    }

    if (result.status === "verificationRequired") {
      toast.info(result.message);
      return;
    }
  } catch (error) {
    console.error("Error in signInAction", error);
    toast.error("Ha ocurrido un error inesperado");
  } finally {
    setLoading(false);
  }
};

const toggleShowPasswordHandler = ({
  setShowPassword,
  showPassword,
}: ToggleShowPasswordHandlerProps): void => {
  setShowPassword(!showPassword);
};

const SignInHandlers = ({
  form,
  router,
  setLoading,
  setShowPassword,
  showPassword,
}: SignInHandlersProps): SignInHandlersReturn => {
  return {
    handleSubmit: (values: SignInSchema) =>
      submitHandler({
        form,
        router,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { SignInHandlers };
