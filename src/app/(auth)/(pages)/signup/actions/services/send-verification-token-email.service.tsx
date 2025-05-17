// Vendors
import { Resend } from "resend";
// Emails
import { VerificationTokenEmail } from "../../emails/verification-token/verification-token.email";
// Types
import type { SendVerificationTokenEmailProps } from "./types/send-verification-token-email.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationTokenEmail = async ({
  email,
  token,
}: SendVerificationTokenEmailProps): Promise<void> => {
  await resend.emails.send({
    from: "Gesmonport <noreply@gesmonport.com>",
    to: email,
    subject: "Verifica tu dirección de correo electrónico",
    react: <VerificationTokenEmail token={token} email={email} />,
  });
};

export { sendVerificationTokenEmail };
