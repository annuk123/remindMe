"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Bell, ClipboardCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function HowItWorksPage() {
// Scroll animation reference
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });


  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [300, -200]);


// Helper functions for date formatting
const toMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const daysUntil = (iso: string) => {
  const now = toMidnight(new Date());
  const target = toMidnight(new Date(iso));
  const diffDays = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays;
};
const formatShort = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });

// example subscription (replace with real data)
const sampleSubscriptionISO = "2025-10-15"; 
const sampleSubscriptionName = "Figma Pro";

  const steps = [
    {
      icon: <ClipboardCheck className="w-7 h-7 text-blue-600" />,
      title: "1. Add a Reminder",
      description:
        "Start by adding any important task, deadline, bill, or event. Keep it simple — title, time, and optional note.",
      bg: "from-blue-100/70 to-blue-50/30",
    },
    {
      icon: <Bell className="w-7 h-7 text-indigo-600" />,
      title: "2. Get Timely Alerts",
      description:
        "RemindMe notifies you right when you need it — not too early, not too late. You’ll receive reminders via email or browser.",
      bg: "from-indigo-100/70 to-indigo-50/30",
    },
    {
      icon: <Calendar className="w-7 h-7 text-purple-600" />,
      title: "3. Stay Organized Effortlessly",
      description:
        "View all upcoming reminders in a clean, distraction-free dashboard. Manage and track everything in one place.",
      bg: "from-purple-100/70 to-purple-50/30",
    },
  ];

  return (
    <div ref={scrollRef} className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <Navbar />

      {/* Hero */}
      <section className="relative text-center py-28 px-6 max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="w-10 h-10 text-indigo-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            How <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">RemindMe</span> Works
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Designed for simplicity — add tasks, get reminders, and stay organized.  
            It’s productivity without the overwhelm.
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-28">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-3xl bg-gradient-to-br ${step.bg} shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center flex flex-col items-center`}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-inner mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Real-life Example Section */}
<section ref={scrollRef} className="relative py-40 bg-transparent overflow-hidden">
  <h2 className="text-center text-4xl sm:text-5xl font-bold mb-20 text-slate-900">
    💭 Real-Life Reminders We All Forget
  </h2>

  <div className="relative h-[600px] max-w-6xl mx-auto">
    {/* 1 - Assignment */}
    <motion.div
      style={{ y: y1 }}
      className="absolute top-[10px] left-[10%] bg-white border border-blue-100 shadow-lg rounded-2xl px-5 py-4 w-64 text-left hover:shadow-blue-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">📚 Submit React Project</p>
      <p className="text-xs text-blue-600 mt-1">Tomorrow • 10:00 AM</p>
    </motion.div>

    {/* 2 - Team Meeting */}
    <motion.div
      style={{ y: y2 }}
      className="absolute top-[120px] right-[12%] bg-white border border-blue-100 shadow-lg rounded-2xl px-5 py-4 w-64 text-left hover:shadow-blue-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">👩‍💻 Team Sync Call</p>
      <p className="text-xs text-blue-600 mt-1">Today • 3:00 PM</p>
    </motion.div>

    {/* 3 - Rent / Bill */}
    <motion.div
      style={{ y: y3 }}
      className="absolute bottom-[20px] left-[30%] bg-white border border-blue-100 shadow-lg rounded-2xl px-5 py-4 w-64 text-left hover:shadow-blue-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">💳 Pay Internet Bill</p>
      <p className="text-xs text-blue-600 mt-1">Due in 1 day</p>
    </motion.div>

    {/* 4 - Client Follow-up */}
    <motion.div
      style={{ y: y1 }}
      className="absolute top-[250px] left-[5%] bg-white border border-blue-100 shadow-lg rounded-2xl px-5 py-4 w-64 text-left hover:shadow-blue-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">📩 Follow Up with Client</p>
      <p className="text-xs text-blue-600 mt-1">In 2 hours</p>
    </motion.div>

    {/* 5 - Hosting Renewal */}
    <motion.div
      style={{ y: y2 }}
      className="absolute bottom-[40px] right-[20%] bg-white border border-blue-100 shadow-lg rounded-2xl px-5 py-4 w-64 text-left hover:shadow-blue-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">🌐 Renew Domain & Hosting</p>
      <p className="text-xs text-blue-600 mt-1">Expiring in 3 days</p>
    </motion.div>

    {/* 6 - Workout Reminder */}
    <motion.div
      style={{ y: y3 }}
      className="absolute top-[380px] left-[45%] bg-white border border-blue-100 shadow-lg rounded-2xl px-5 py-4 w-64 text-left hover:shadow-blue-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">🏋️‍♀️ Evening Workout</p>
      <p className="text-xs text-blue-600 mt-1">Today • 7:00 PM</p>
    </motion.div>

    {/* 7 - Friend’s Birthday */}
    <motion.div
      style={{ y: y2 }}
      className="absolute top-[160px] left-[55%] bg-white border border-blue-100 shadow-lg rounded-2xl px-5 py-4 w-64 text-left hover:shadow-blue-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">🎂 Wish Riya Happy Birthday</p>
      <p className="text-xs text-blue-600 mt-1">Today • 12:00 PM</p>
    </motion.div>

    {/* 8 - Subscription Expiry (NEW) */}
    <motion.div
      style={{ y: y1 }}
      className="absolute top-[60px] left-[35%] bg-white border border-amber-100 shadow-lg rounded-2xl px-5 py-4 w-72 text-left hover:shadow-amber-100/50 transition-all duration-300"
    >
      <p className="text-sm font-medium text-slate-800">🔔 {sampleSubscriptionName} Renewal</p>
      <p className="text-xs text-amber-600 mt-1">
        {(() => {
          const d = daysUntil(sampleSubscriptionISO);
          if (d > 1) return `Expires in ${d} days • ${formatShort(sampleSubscriptionISO)}`;
          if (d === 1) return `Expires tomorrow • ${formatShort(sampleSubscriptionISO)}`;
          if (d === 0) return `Expires today • ${formatShort(sampleSubscriptionISO)}`;
          return `Expired • ${formatShort(sampleSubscriptionISO)}`;
        })()}
      </p>
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-900 mb-4"
        >
          Ready to Simplify Your Routine?
        </motion.h2>
        <p className="text-slate-600 mb-8">
          Join hundreds of students and professionals who use RemindMe  
          to stay consistent and stress-free every day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-started">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition">
              Get Started Free
            </Button>
          </Link>
          <Link href="/features">
            <Button
              variant="outline"
              className="rounded-full border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3"
            >
              See All Features
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
