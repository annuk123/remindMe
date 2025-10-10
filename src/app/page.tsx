"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState, useRef } from "react";
import {
  BookOpen,
  Laptop,
  Coffee,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "Stay ahead of deadlines, classes, and goals — let RemindMe handle your memory so you can focus on what matters.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <main className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-slate-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200/30 blur-3xl rounded-full" />

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Remember What Matters.
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-medium mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Built for students & young professionals — manage assignments, meetings, and daily tasks without stress.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/get-started">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-[1.04] transition">
              Get Started Free
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-2xl font-medium"
          >
            Try Demo
          </Button>
        </motion.div>

        {/* Typing demo */}
        <motion.div
          className="mt-14 bg-white/90 backdrop-blur-xl border border-blue-100 shadow-2xl rounded-2xl max-w-xl mx-auto p-6 text-left font-mono text-slate-700 whitespace-pre-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-blue-600 mb-2 block">
            🧠 Smart Reminder
          </span>
          {typedText}
          <span className="animate-pulse text-blue-500">|</span>
        </motion.div>
      </section>

      {/* Floating Reminder Cards Section */}
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


      {/* Use Cases */}
      <section className="py-24 bg-white/70 backdrop-blur-sm border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <BookOpen size={38} className="text-blue-600 mb-4" />,
              title: "Stay on top of assignments",
              desc: "Track project deadlines and exam dates easily — never submit late again.",
            },
            {
              icon: <Laptop size={38} className="text-blue-600 mb-4" />,
              title: "Manage your tasks smartly",
              desc: "Plan study sessions, work, or side projects in one simple dashboard.",
            },
            {
              icon: <Coffee size={38} className="text-blue-600 mb-4" />,
              title: "Balance life & work",
              desc: "Remind yourself to rest, socialize, or recharge at the right time.",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-blue-200/50 border border-blue-100 p-8 text-center hover:scale-[1.05] transition-transform duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to never miss another deadline?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of students & young professionals staying organized with RemindMe.
          </p>
          <Link href="/get-started">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-2xl shadow-md hover:scale-[1.03] transition">
              Start Organizing Free
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
