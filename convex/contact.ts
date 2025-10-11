import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Save contact
export const addContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      message: args.message,
      createdAt: Date.now(),
    });
  },
});

// (Optional) Get all contacts (for admin dashboard later)
export const listContacts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect();
  },
});
