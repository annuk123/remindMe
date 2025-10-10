import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

// Create reminder
export const createReminder = mutation({
  args: {
    userId: v.id("users"),
    title: v.string(),
    description: v.optional(v.string()),
    remindAt: v.string(), // from frontend (local time input)
     timeZone: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    //  Convert local datetime string to ISO (UTC)
    const remindAtIso = new Date(args.remindAt).toISOString();

    await ctx.db.insert("reminders", {
      userId: args.userId,
      title: args.title,
      description: args.description ?? "",
      remindAt: remindAtIso, // always store in UTC ISO format
       timeZone: args.timeZone ?? "UTC", 
      createdAt: Date.now(),
      sent: false, // prevents duplicate emails
    });

    console.log("Reminder created for:", args.userId, "at", remindAtIso);
  },
});

// Fetch reminders by user
export const getRemindersByUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("reminders")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

// Delete reminder
export const deleteReminder = mutation({
  args: { reminderId: v.id("reminders") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.reminderId);
    console.log("🗑️ Deleted reminder:", args.reminderId);
  },
});

//  Process due reminders — checks all reminders, sends emails if due
export const processDueReminders = internalMutation({
  handler: async (ctx) => {
    console.log(" processDueReminders started at", new Date().toISOString());

    const reminders = await ctx.db.query("reminders").collect();
    console.log(`🔎 Found ${reminders.length} reminders in DB`);

    const now = Date.now();

    for (const r of reminders) {
      const remindAtTime = new Date(r.remindAt).getTime();
      const isDue = !r.sent && remindAtTime <= now;

      console.log("⏱️ Checking reminder:", {
        id: r._id,
        remindAt: r.remindAt,
        remindAtMs: remindAtTime,
        timeZone: r.timeZone,
        sent: r.sent,
        isDue,
      });

      if (isDue) {
        const user = await ctx.db.get(r.userId);
        console.log("🧍 Resolved user:", user ? user.email : "not found");

        if (user?.email) {
          //  Trigger email via internal action
          await ctx.scheduler.runAfter(0, internal.actions.sendReminderEmail, {
            to: user.email,
            title: r.title,
            description: r.description || "",
            remindAt: r.remindAt,
            timezone: r.timeZone,
          });
          console.log("✅ Email scheduled for:", user.email);
        } else {
          console.log("⚠️ No email found for reminder:", r._id);
        }

        //  Mark reminder as sent (prevents duplicate sends)
        await ctx.db.patch(r._id, { sent: true });
        console.log("✂️ Marked as sent:", r._id);
      }
    }

    console.log("✅ processDueReminders finished at", new Date().toISOString());
  },
});
