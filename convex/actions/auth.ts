"use node";
import { action } from "../_generated/server";
import { v } from "convex/values";
import { api } from "../_generated/api";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export const sendResetPasswordEmail = action({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    // 1️⃣ Find user (via query)
    const user = await ctx.runQuery(api.users.getUserByEmail, { email });
    if (!user) throw new Error("No account found with this email");

    // 2️⃣ Generate reset token
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = Date.now() + 1000 * 60 * 15; // 15 min expiry

    // 3️⃣ Store token (call mutation — not ctx.db)
    await ctx.runMutation(api.resetTokens.createResetToken, {
      userId: user._id,
      token,
      expiresAt,
    });

    // 4️⃣ Send reset email
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset?token=${token}`;
    await ctx.runAction(api.actions.email.sendResetPasswordEmail, {
      to: email,
      name: user.name,
      resetUrl,
    });

    return { success: true };
  },
});

export const resetPassword = action({
  args: { token: v.string(), newPassword: v.string() },
  handler: async (ctx, { token, newPassword }) => {
    // 1️⃣ Look up reset token
    const record = await ctx.runQuery(api.resetTokens.getTokenByValue, { token });

    if (!record) throw new Error("Invalid or expired token");
    if (record.expiresAt < Date.now()) throw new Error("Token expired");

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 3️⃣ Update user
    await ctx.runMutation(api.users.updateUserPassword, {
      userId: record.userId,
      password: hashedPassword,
    });

    // 4️⃣ Delete token after use
    await ctx.runMutation(api.resetTokens.deleteResetToken, { id: record._id });

    return { success: true };
  },
});
