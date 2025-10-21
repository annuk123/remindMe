"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";

export default function FeedbackPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const addFeedback = useMutation(api.contact.addContact);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      //  Save to Convex
      // await addFeedback(form);

      // Send email to you
      await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-24">
      <motion.div
        className="max-w-lg w-full bg-white shadow-lg border border-blue-100 rounded-3xl p-8 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">
          💬 Share Your Feedback
        </h1>
        <p className="text-slate-600 mb-8 text-center text-sm">
          Your thoughts shape the future of RemindMe — we’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Feedback..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>

          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white py-3 rounded-xl shadow-md font-medium transition"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "✅ Sent! Thank you 💙"
              : "Send Feedback"}
          </Button>
        </form>

        {status === "error" && (
          <p className="text-red-500 text-center mt-3">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </motion.div>
    </main>
  );
}
