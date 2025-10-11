import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createResetToken = mutation({
  args: {
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("resetTokens", args);
  },
});

export const getTokenByValue = query({
  args: { token: v.string() },
  handler: async (ctx, { token }) => {
    return await ctx.db
      .query("resetTokens")
      .withIndex("by_token", (q) => q.eq("token", token))
      .unique();
  },
});

export const deleteResetToken = mutation({
  args: { id: v.id("resetTokens") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
