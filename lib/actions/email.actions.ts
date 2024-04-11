"use server";

import { Resend } from "resend";

import EmailTemplate from "@/app/components/EmailTemplate";
import { EmailData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: EmailData) {
  const { name, email, message } = data;
  const newEmail = "New Email";

  if (data) {
    try {
      const data = await resend.emails.send({
        from: "Swift Monkey <noreply@swiftmonkey.tech>",
        to: ["info@swiftmonkey.tech"],
        subject: newEmail,
        react: EmailTemplate({
          name,
          email,
          message,
        }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
}
