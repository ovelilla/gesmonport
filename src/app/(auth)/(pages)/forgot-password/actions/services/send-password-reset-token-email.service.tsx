// Vendors
import { Resend } from "resend";
// Templates
import { PasswordResetTokenEmail } from "../../emails/password-reset-token/password-reset-token.email";
// Types
import { SendPasswordResetTokenEmailProps } from "./types/send-password-reset-token-email.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendPasswordResetTokenEmail = async ({
  email,
  token,
}: SendPasswordResetTokenEmailProps): Promise<void> => {
  await resend.emails.send({
    from: "Nubigest <noreply@nubigest.com>",
    to: email,
    subject: "Restablece tu contraseña",
    react: <PasswordResetTokenEmail token={token} />,
  });
};

export { sendPasswordResetTokenEmail };
