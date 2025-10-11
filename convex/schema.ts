import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  reminders: defineTable({
    userId: v.id("users"),
    title: v.string(),
    description: v.optional(v.string()),
    remindAt: v.string(), // ISO date-time string
     timeZone: v.optional(v.string()),
    sent: v.optional(v.boolean()), 
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),

  resetTokens: defineTable({
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
  }).index("by_token", ["token"]),
});
