"use node";
import { action } from "../_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResetPasswordEmail = action({
  args: { to: v.string(), name: v.string(), resetUrl: v.string() },
  handler: async (_, { to, name, resetUrl }) => {
    await resend.emails.send({
   from: "RemindMe <noreply@remindme.pixelui.studio>",
      to,
      subject: "Reset your password 🔒",
      html: `
        <p>Hey ${name},</p>
        <p>Click the link below to reset your password. This link is valid for <b>15 minutes</b>.</p>
        <p><a href="${resetUrl}" style="color:#2563EB;">Reset Password</a></p>
        <p>If you didn’t request this, you can safely ignore it.</p>
      `,
    });
  },
});
