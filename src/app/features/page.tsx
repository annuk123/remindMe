"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Bell,
  Lock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { ComparisonTable } from "@/components/ComparisionTable/ComparisonTable";
import Image from "next/image";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
    title: "Instant Setup",
    description:
      "Add reminders in seconds — no clutter, no confusion. Get started right away.",
  },
  {
    icon: <Bell className="w-6 h-6 text-indigo-600" />,
    title: "Smart Notifications",
    description:
      "Customizable alerts that remind you just in time — never too early, never too late.",
  },
  // {
  //   icon: <Wand2 className="w-6 h-6 text-indigo-600" />,
  //   title: "AI Suggestions",
  //   description:
  //     "Let AI auto-fill your routine reminders and deadlines intelligently.",
  // },
  // {
  //   icon: <CalendarCheck className="w-6 h-6 text-indigo-600" />,
  //   title: "Calendar Sync",
  //   description:
  //     "Easily connect with your Google or iCloud calendar for seamless scheduling.",
  // },
  // {
  //   icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
  //   title: "Cross-Device Access",
  //   description:
  //     "Stay synced across devices — your reminders follow you everywhere.",
  // },
  {
    icon: <Lock className="w-6 h-6 text-indigo-600" />,
    title: "Privacy First",
    description:
      "Your data is yours. Always encrypted, never sold, and completely private.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <Navbar />

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/40 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-32 w-full text-center">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="w-10 h-10 text-indigo-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Powerful Features, <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Simple Experience.
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            RemindMe combines smart technology and clean design to help you stay
            organized — without adding more to your plate.
          </p>
        </motion.div>

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-md hover:shadow-blue-200/60 hover:scale-[1.03] transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 shadow-inner mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Product Snapshot */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28 flex flex-col items-center text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-8 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              See How It Works
            </h2>
            <p className="text-slate-600 mb-8">
              Create, edit, and track reminders in a clean, intuitive dashboard.
            </p>
            <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-md">
              <Image
                src="/preview-dashboard.png" 
                alt="RemindMe dashboard preview"
                className="w-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Start Staying Organized Today
          </h2>
          <p className="text-slate-600 mb-8">
            Join students and professionals who use RemindMe to make life simpler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:shadow-blue-200/50 transition">
                Get Started Free
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                variant="outline"
                className="rounded-full border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <ComparisonTable />
        </motion.div>
      </div>
    </div>
  );
}
