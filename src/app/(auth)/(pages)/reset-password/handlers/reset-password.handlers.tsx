// Vendors
import { toast } from "sonner";
// Actions
import { resetPasswordAction } from "../actions/reset-password.actions";
// Types
import type {
  ResetPasswordHandlersProps,
  ResetPasswordHandlersReturn,
  SubmitHandlerProps,
  ToggleShowPasswordHandlerProps,
} from "./types/reset-password.handlers.types";
import type { ResetPasswordSchema } from "../schemas/types/reset-password.schema.types";

const submitHandler = async ({
  form,
  setLoading,
  token,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading(true);

  try {
    const result = await resetPasswordAction({ values, token });

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
    console.error("Error in oautClickHandler", error);
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

const ResetPasswordHandlers = ({
  form,
  setShowPassword,
  setLoading,
  showPassword,
  token,
}: ResetPasswordHandlersProps): ResetPasswordHandlersReturn => {
  return {
    handleSubmit: (values: ResetPasswordSchema) =>
      submitHandler({
        form,
        setLoading,
        token,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export { ResetPasswordHandlers };
