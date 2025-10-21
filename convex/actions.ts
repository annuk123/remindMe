import { action } from "./_generated/server";
import { v } from "convex/values";
import { api, internal } from "./_generated/api"; 
import { internalAction } from "./_generated/server";
import { Resend } from "resend";
import ReminderEmail from "../src/components/emails/ReminderEmail"; 
import { render } from "@react-email/render";
import WelcomeEmail from "../src/components/emails/WelcomeEmail";
// import { sendWelcomeEmail } from "./internal";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const createUserAction = action({
  args: { name: v.string(), email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    await ctx.runMutation(api.users.createUser, {
      name: args.name,
      email: args.email,
      password: args.password,
    });

    //  Send Welcome Email after signup
 await ctx.runAction(internal.welcome.sendWelcomeEmail, {
      to: args.email,
      name: args.name,
    });


  },
});


export const updateUserPasswordAction = action({
  args: { userId: v.id("users"), password: v.string() },
  handler: async (ctx, args) => {
    await ctx.runMutation(api.users.updateUserPassword, {
      userId: args.userId,
      password: args.password, //  NO HASH HERE
    });
  },
});



export const sendReminderEmail = internalAction({
  args: {
    to: v.string(),
    title: v.string(),
    description: v.optional(v.string()),
    remindAt: v.string(),
    timezone: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      // await render() because it returns a Promise<string>
      const emailHtml = await render(
        ReminderEmail({
          title: args.title,
          description: args.description,
          remindAt: args.remindAt,
          timeZone: args.timezone ?? "UTC",
        })
      );

      await resend.emails.send({
      from: "RemindMe <noreply@remindme.pixelui.studio>",
        to: args.to,
        subject: `⏰ Reminder: ${args.title}`,
        html: emailHtml, //  now a string, not Promise<string>
      });


      console.log(`✅ Branded reminder email sent to ${args.to}`);
    } catch (error) {
      console.error("❌ Failed to send reminder email:", error);
    }
  },
});
