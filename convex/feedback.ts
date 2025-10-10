// convex/feedback.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Save feedback
export const addFeedback = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("feedbacks", {
      name: args.name,
      email: args.email,
      message: args.message,
      createdAt: Date.now(),
    });
  },
});

// (Optional) Get all feedbacks (for admin dashboard later)
export const listFeedback = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("feedbacks").order("desc").collect();
  },
});
