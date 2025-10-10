"use client";

import { motion } from "framer-motion";
import { Heart, Bell, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">RemindMe</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            A simple reminder app built to help students and professionals stay organized, stress-free, and in control of their time.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We believe productivity shouldn’t feel complicated. RemindMe was born from a simple idea —
            to help people remember what truly matters without feeling overwhelmed.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you’re a student juggling classes or a professional managing projects, RemindMe ensures that your deadlines,
            bills, and tasks are always on time — and never forgotten.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-lg border border-blue-100 p-8"
        >
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-10 blur-2xl" />
          <Image
            src="/preview-dashboard.png"
            alt="RemindMe preview"
            className="rounded-2xl shadow-md border border-blue-100"
          />
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 w-full bg-white/60 backdrop-blur-md border-t border-blue-100/40">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-900 mb-16"
        >
          What We Believe In
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {[
            {
              icon: <Heart className="w-8 h-8 text-red-500" />,
              title: "Simplicity",
              text: "We believe great tools should feel invisible — clear, intuitive, and clutter-free.",
            },
            {
              icon: <Bell className="w-8 h-8 text-blue-500" />,
              title: "Reliability",
              text: "Your reminders should just work — every time, without worry or delay.",
            },
            {
              icon: <Target className="w-8 h-8 text-indigo-600" />,
              title: "Focus",
              text: "We help you spend less time managing tasks and more time achieving them.",
            },
            {
              icon: <Users className="w-8 h-8 text-purple-600" />,
              title: "Community",
              text: "Built by an indie maker for people who care about getting better every day.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 rounded-3xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Built with 💙 by an Indie Hacker
          </h2>
          <p className="text-slate-600 text-base max-w-3xl mx-auto mb-8">
            Hi, I’m <span className="font-semibold text-blue-600">Annu</span> — a passionate indie hacker building tools that help people work smarter, not harder.  
            RemindMe was born out of my own struggle to stay consistent while juggling multiple projects.
          </p>
          <p className="text-slate-600 text-base max-w-3xl mx-auto mb-10">
            This isn’t just an app — it’s a personal mission to make time management effortless and meaningful for everyone.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 rounded-full px-8"
              >
                Contact Me
              </Button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full px-8 shadow-md hover:shadow-blue-200/50 transition">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
