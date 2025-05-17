// Vendors
import { toast } from "sonner";
// Actions
import { signUpAction } from "../actions/signup.actions";
// Types
import type { SignUpSchema } from "../schemas/types/signup.schema.types";
import type {
  SignUpHandlersProps,
  SignUpHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/signup.handlers.types";

const submitHandler = async ({
  form,
  setLoading,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading(true);

  try {
    const result = await signUpAction({ values });

    if (result.status === "error") {
      toast.error(result.message);
      form.setValue("password", "");
      return;
    }

    if (result.status === "success") {
      toast.success(result.message);
      form.reset();
      return;
    }
  } catch (error) {
    console.error("Error in submitHandler", error);
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

const SignUpHandlers = ({
  form,
  setShowPassword,
  setLoading,
  showPassword,
}: SignUpHandlersProps): SignUpHandlersReturn => {
  return {
    handleSubmit: (values: SignUpSchema) =>
      submitHandler({
        form,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { SignUpHandlers };
