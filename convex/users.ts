import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import type { UserType } from "./types/user";

export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args): Promise<UserType | null> => {
    return (
      (await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", args.email))
        .unique()) || null
    );
  },
});

export const createUser = mutation({
  args: { name: v.string(), email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existing) throw new Error("User already exists");

    //  Just store password hash directly
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
