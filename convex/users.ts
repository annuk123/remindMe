import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Fetch user by email
export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
    return user || null;
  },
});

// DB-only create user (called from actions)
export const createUser = mutation({
  args: { name: v.string(), email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) throw new Error("User already exists");

    await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      password: args.password,
      createdAt: Date.now(),
    });
  },
});

export const updateUserPassword = mutation({
  args: { userId: v.id("users"), password: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, { password: args.password });
  },
});
