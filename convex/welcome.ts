
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { render } from "@react-email/render";
import WelcomeEmail from "../src/components/emails/WelcomeEmail";
import { Resend } from "resend";
 
 const resend = new Resend(process.env.RESEND_API_KEY!);

 // Internal action: Send Welcome email after signup
export const sendWelcomeEmail = internalAction({
  args: { to: v.string(), name: v.optional(v.string()) },
  handler: async (_ctx, args) => {
    try {
      const emailHtml = await render(
        WelcomeEmail({ name: args.name ?? "there" })
      );

      await resend.emails.send({
        from: "RemindMe <noreply@remindme.pixelui.studio>",
        to: args.to,
        subject: " Welcome to RemindMe",
        html: emailHtml,
      });

      console.log(`✅ Welcome email sent to ${args.to}`);
    } catch (error) {
      console.error("❌ Failed to send welcome email:", error);
    }
  },
});