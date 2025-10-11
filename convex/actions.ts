import { action } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";
import { api } from "./_generated/api"; 
import { internalAction } from "./_generated/server";
import { Resend } from "resend";
import ReminderEmail from "../src/components/emails/ReminderEmail"; 
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const createUserAction = action({
  args: { name: v.string(), email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    await ctx.runMutation(api.users.createUser, {
      name: args.name,
      email: args.email,
      password: args.password, // ✅ NO HASH HERE
    });
  },
});

export const updateUserPasswordAction = action({
  args: { userId: v.id("users"), password: v.string() },
  handler: async (ctx, args) => {
    await ctx.runMutation(api.users.updateUserPassword, {
      userId: args.userId,
      password: args.password, // ✅ NO HASH HERE
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

// import { action, internalAction } from "./_generated/server";
// import { v } from "convex/values";
// import { api } from "./_generated/api";
// import { Resend } from "resend";
// import { render } from "@react-email/render";
// import ReminderEmail from "../src/components/emails/ReminderEmail";
// import WelcomeEmail from "../src/components/emails/WelcomeEmail";
// import { hashPassword } from "../src/lib/auth";

// // ✅ Initialize Resend client safely
// if (!process.env.RESEND_API_KEY) {
//   throw new Error("Missing RESEND_API_KEY in environment variables");
// }
// const resend = new Resend(process.env.RESEND_API_KEY);

// // ✅ Create user (used by NextAuth authorize flow)
// export const createUserAction = action({
//   args: {
//     name: v.string(),
//     email: v.string(),
//     password: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const hashedPassword = await hashPassword(args.password);

//     await ctx.runMutation(api.users.createUser, {
//       name: args.name,
//       email: args.email,
//       password: hashedPassword,
//     });
//   },
// });

// // ✅ Update user password (used when user without password logs in first time)
// export const updateUserPasswordAction = action({
//   args: { userId: v.id("users"), password: v.string() },
//   handler: async (ctx, args) => {
//     const hashedPassword = await hashPassword(args.password);

//     await ctx.runMutation(api.users.updateUserPassword, {
//       userId: args.userId,
//       password: hashedPassword,
//     });
//   },
// });

// // ✅ Internal action: Send branded reminder email
// export const sendReminderEmail = internalAction({
//   args: {
//     to: v.string(),
//     title: v.string(),
//     description: v.optional(v.string()),
//     remindAt: v.string(),
//     timezone: v.optional(v.string()),
//   },
//   handler: async (_ctx, args) => {
//     try {
//       const emailHtml = await render(
//         ReminderEmail({
//           title: args.title,
//           description: args.description,
//           remindAt: args.remindAt,
//           timeZone: args.timezone ?? "UTC",
//         })
//       );

//       await resend.emails.send({
//         from: "RemindMe <noreply@remindme.pixelui.studio>",
//         to: args.to,
//         subject: `⏰ Reminder: ${args.title}`,
//         html: emailHtml,
//       });

//       console.log(`✅ Reminder email sent to ${args.to}`);
//     } catch (error) {
//       console.error("❌ Failed to send reminder email:", error);
//     }
//   },
// });

// // ✅ Internal action: Send Welcome email after signup
// export const sendWelcomeEmail = internalAction({
//   args: { to: v.string(), name: v.optional(v.string()) },
//   handler: async (_ctx, args) => {
//     try {
//       const emailHtml = await render(
//         WelcomeEmail({ name: args.name ?? "there" })
//       );

//       await resend.emails.send({
//         from: "RemindMe <noreply@remindme.pixelui.studio>",
//         to: args.to,
//         subject: "🎉 Welcome to RemindMe",
//         html: emailHtml,
//       });

//       console.log(`✅ Welcome email sent to ${args.to}`);
//     } catch (error) {
//       console.error("❌ Failed to send welcome email:", error);
//     }
//   },
// });
