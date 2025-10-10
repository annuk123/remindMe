import bcrypt from "bcryptjs";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: { name: v.string(), email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const hashed = await bcrypt.hash(args.password, 10);
    await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      password: hashed, // ✅ store hashed password
      createdAt: Date.now(),
    });
  },
});
