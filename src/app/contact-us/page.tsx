"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error("Failed to send message");

    setForm({ name: "", email: "", message: "" });
    setStatus("sent");

    //  Reset status automatically after 2 seconds
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  } catch (err) {
    console.error("❌ Error sending feedback:", err);
    setStatus("error");

    // Auto reset error state after 2 seconds too
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }
};

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <Navbar />
      {/* Hero Section */}
      <section className="w-full py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto z-10"
        >
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question, idea, or partnership proposal?  
            We’d love to hear from you. The RemindMe team usually replies within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative max-w-6xl w-full mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg border border-blue-100 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Contact Information
          </h2>
          <p className="text-slate-600 mb-6">
            We’re always happy to connect!  
            Drop us a message or reach out through any of the options below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <a
                href="mailto:anuk35168@gmail.com"
                className="text-slate-700 hover:text-blue-600 transition font-medium"
              >
                anuk35168@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MessageCircle className="text-blue-600 w-5 h-5" />
              <a
                href="https://twitter.com/Annu66126617"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition font-medium"
              >
                @Annu66126617
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600 w-5 h-5" />
              <p className="text-slate-700">Remote – India</p>
            </div>
          </div>

          {/* <p className="text-slate-500 text-sm mt-8">
            You can also share feature ideas directly on the{" "}
            <a
              href="/feedback"
              className="text-blue-600 hover:underline font-medium"
            >
              Feedback Page
            </a>
            .
          </p> */}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg border border-blue-100 rounded-3xl p-8"
        >
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Send a Message
          </h2>
          <p className="text-slate-600 mb-6">
            Fill out the form below — we’ll get back to you soon 💬
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
              placeholder="Your Message..."
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
                ? "Message Sent!"
                : "Send Message"}
            </Button>
          </form>

          {status === "error" && (
            <p className="text-red-500 text-sm mt-3">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </motion.div>
      </section>
    </div>
  );
}
